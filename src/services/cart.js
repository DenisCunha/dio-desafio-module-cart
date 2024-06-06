async function addItem(userCart, item) {
userCart.push(item);
}

async function deleteItem(userCart, item_id) {
    const deleteId = item_id - 1;
    if (item_id >= 0 && item_id <= userCart.length) {
        userCart.splice(deleteId, 1);
    }
    //console.log(`teste ${userCart.length}`);
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
    console.log("Item Não encotrado");
    return;
    } 

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    } 
  
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
    
 // console.log("index " + indexFound);
}

async function displayCart(userCart) {
console.log("Your Shopee Cart");

userCart.forEach(
(item, index) => {
console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
}
);
}


async function CalculateTotal(userCart) {
const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
console.log(`\nTotal: ${result}`);
}

export {
    addItem,
    deleteItem,
    removeItem,
    CalculateTotal,
    displayCart,
}