import {
  DefaultDiscountStrategy,
  ECommerceShoppingCart,
  NewDiscountStrategy,
} from "./Shopping-Cart";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discountStrategy = new DefaultDiscountStrategy();
shoppingCart.addProduct({ name: "Product 1", price: 50 });
shoppingCart.addProduct({ name: "Product 2", price: 50 });
shoppingCart.addProduct({ name: "Product 3", price: 50 });

console.log(shoppingCart.getTotal()); // 150
console.log(shoppingCart.getTotalWithDiscount()); //135

shoppingCart.discountStrategy = new NewDiscountStrategy();

console.log(shoppingCart.getTotal()); // 150
console.log(shoppingCart.getTotalWithDiscount()); //142.5
