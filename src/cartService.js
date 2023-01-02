//--- cart map contains all the products and its ocurrences which were added to the cart
let cart = new Map();
//--- cart format key: product.id value: [name, price, ocurrences]

//--- Returns all the elements contained in -cart- map
export function getCart(){
    return [...cart.values()]
}
//--- Adds a new element into -cart- map
export function insertElement(id,element){
    cart.set(id, element);
}
//--- Removes an element by its ID from -cart- map
export function removeElement(elementID){
    cart.delete(elementID);
}
//--- Returns the value of -elementID- key from -cart- map
export function getElement(elementID){
    return cart.get(elementID);
}