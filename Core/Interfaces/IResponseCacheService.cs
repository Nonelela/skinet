using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
        public Task CacheResponseAsync(string cacheKey, object response, TimeSpan timeToLive);
        public Task<string> GetCachedResponseAsync(string cacheKey);
    }
}
