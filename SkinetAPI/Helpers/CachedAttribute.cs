﻿using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Text;

namespace SkinetAPI.Helpers
{
    public class CachedAttribute : Attribute, IAsyncActionFilter
    {
        private int _timeToLiveSeconds;
        public CachedAttribute(int timeToLiveSeconds)
        {
            _timeToLiveSeconds = timeToLiveSeconds;
        }
        public async Task OnActionExecutionAsync(ActionExecutingContext context, 
            ActionExecutionDelegate next)
        {
            var cacheService = context.HttpContext.RequestServices.GetRequiredService<IResponseCacheService>();

            var cacheKey = GenerateCacheKeyFromRequest(context.HttpContext.Request);
            var cacheResponse = await cacheService.GetCachedResponseAsync(cacheKey);

            if (!string.IsNullOrEmpty(cacheResponse))
            {
                var contentResult = new ContentResult
                {
                    Content = cacheResponse,
                    ContentType = "application/json",
                    StatusCode = 200
                };

                context.Result = contentResult;

                return;
            }

            var executedContext = await next();// move to controller

            if (executedContext.Result is OkObjectResult objectResult) 
            {
                await cacheService.CacheResponseAsync(cacheKey, objectResult.Value,
                    TimeSpan.FromSeconds(_timeToLiveSeconds));
            }
        }

        private string GenerateCacheKeyFromRequest(HttpRequest request)
        {
            var keyBuilder = new StringBuilder();
            keyBuilder.Append($"{request.Path}");

            foreach ( var (key, value) in request.Query.OrderBy(x => x.Key))
            {
                keyBuilder.Append($"{key}-{value}");
            }

            return keyBuilder.ToString();
        }
    }
}
