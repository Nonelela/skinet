using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IUnitOfWork _unitOfwork;
        private readonly IBasketRepository _basketRepo;

        public OrderService(IBasketRepository basketRepo,  IUnitOfWork unitOfWork)
        {
            _unitOfwork = unitOfWork;
            _basketRepo = basketRepo;
        }


        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            // get basket from the repo
            var basket = await _basketRepo.GetBasketAsync(basketId);
            
            // get items from the product repo
            var items = new List<OrderItem>();
            foreach (var item in basket.Items) 
            {
                var productItem = await _unitOfwork.Repository<Product>().GetByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);   
            }
            // get delivery method from repo
            var deliveryMethod = await _unitOfwork.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethodId);
            // calc subtotal
            var subtotal = items.Sum(x => x.Price * x.Quantity);

            // check to see if order exists
            var spec = new OrderByPaymentIntentIdSpecification(basket.PaymentIntentId);
            var order = await _unitOfwork.Repository<Order>().GetEntityWithSpec(spec);

            if (order != null) 
            {
                order.ShipToAddress = shippingAddress;
                order.DeliveryMethod = deliveryMethod;
                order.Subtotal = subtotal;
                _unitOfwork.Repository<Order>().Update(order);
            }
            else
            {
                order = new Order(items, buyerEmail, shippingAddress, deliveryMethod,
                    subtotal, basket.PaymentIntentId);
                // save to db
                _unitOfwork.Repository<Order>().Add(order);
            }
          
            var result = await _unitOfwork.Complete();

            if (result <= 0)
            {
                return null;
            }

            // return order
            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await _unitOfwork.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id, buyerEmail);

            return await _unitOfwork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(buyerEmail);

            return await _unitOfwork.Repository<Order>().ListAsync(spec);
        }
    }
}
