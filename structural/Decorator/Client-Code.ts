import {
  ProductCustomizationDecorator,
  ProductStampDecorator,
  TShirt,
} from "./product";

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const CustomizedTShirt = new ProductCustomizationDecorator(tShirt);

//tShirt
console.log(tShirt.name); // Camiseta
console.log(tShirt.price); // 49.9

console.log("-----------");
// tShirtWithStamp
console.log(tShirtWithStamp.name); // Camiseta (Estampada)
console.log(tShirtWithStamp.price); // 59.9

console.log("-----------");
// CustomizedTShirt
console.log(CustomizedTShirt.name); // Camiseta (Customizada)
console.log(CustomizedTShirt.price); // 84.9
