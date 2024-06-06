import createItem from './services/item.js';
import * as cartService from './services/cart.js';



const mycart = [];
//const whishList = [];

console.log("Welcom to Shopee Cart \n");

const item1 = await createItem("Mouse", 20.50, 1);
const item2 = await createItem("Teclado", 24.50, 2);

await cartService.addItem(mycart, item1);
await cartService.addItem(mycart, item2);

//await cartService.deleteItem(mycart, 2);
await cartService.removeItem(mycart, item2);


await cartService.displayCart(mycart);

await cartService.CalculateTotal(mycart);