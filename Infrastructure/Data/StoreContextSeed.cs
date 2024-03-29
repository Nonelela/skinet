﻿
using Core.Entities;
using Core.Entities.OrderAggregate;
using System.Text.Json;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext storeContext)
        {
            if (!storeContext.ProductBrands.Any())
            {
                var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                storeContext.ProductBrands.AddRange(brands);
            }

            if (!storeContext.ProductTypes.Any())
            {
                var productTypesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
                var types = JsonSerializer.Deserialize<List<ProductType>>(productTypesData);
                storeContext.ProductTypes.AddRange(types);
            }

            if (!storeContext.Products.Any())
            {
                var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
                var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                storeContext.Products.AddRange(products);
            }

            if (!storeContext.DeliveryMethods.Any())
            {
                var deliveryData = File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");
                var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);
                storeContext.DeliveryMethods.AddRange(methods);
            }

            if (storeContext.ChangeTracker.HasChanges()) await storeContext.SaveChangesAsync();
        }
    }
}
