import express from 'express';
import * as storageService from './storageService.js';
import * as cartService from './cartService.js';

const router = express.Router();
/*
    ----- MAIN PAGE -----
*/
//--- Gets from the storage all the product instances
router.get('/', (req, res) => {
    res.render('index', { 
        storage: storageService.getStorage().slice(0,5)
    });
});
//--- Loads more products
router.get('/loadProducts', (req, res) => {
    const begin = parseInt(req.query.begin);
    const to = parseInt(req.query.end);
    res.render('storage', {
    storage: storageService.getStorage().slice(begin,to)
    });
});
//--- Loads an empty form
router.get('/form', (req, res) => {
    let subElements = storageService.getDefaultSubElements();
    res.render('form', {subElements});
});
//--- Gets the values of insertion form its inputs
router.post('/productNew', (req, res) => {
    storageService.insertElement(req.body,req.body.id);
    console.log(req.body);
    res.redirect('/');
});
/*
    ----- PRODUCT PAGE -----
*/
//--- Gets from the storage the product whose id is param id
router.get('/product/:id', (req, res) => {
    let product = storageService.getElement(req.params.id);
    let storage = storageService.getStorage();
    let subElements = storageService.getSubElements(req.params.id);
    console.log(product);
    let relatedProducts = []
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * storage.length);
        let randomElement = storage.slice(randomIndex, randomIndex + 1)[0];
        relatedProducts.push(randomElement);
        console.log(Object.values(product));
    }
  
    res.render('product_page', {
        product,
        subElements,
        storage: relatedProducts
    });
});
//--- Loads the product's modificaton form
router.get('/product/:id/form', (req, res) => {
    console.log(req.params.id);
    let subElements = storageService.getSubElements(req.params.id);
    res.render('form', {subElements});
});
//--- Removes from the storage the Product associated with param id key
router.get('/product/:id/delete', (req, res) => {
    storageService.removeElement(req.params.id);
    res.render('deleted_product');
});
//--- Deletes a specific subelement from a product
router.get('/delete/:id/:name', (req, res) => {
    delete storageService.getElement(req.params.id)[req.params.name];
    res.redirect('back');
});
/*
    ----- CART PAGE -----
*/
//--- Accesses the cart page
router.get('/cart',(req, res) => {
    let productsInCart = [];
    let amount = 0;
    for (let product of cartService.getCart()){
        let info = storageService.getElement(product.id);
        productsInCart.push({id: product.id, name: info.name, image: info.image, price: info.price, ocurrences: product.ocurrences});
        amount += info.price * product.ocurrences;
    }
    res.render('cart_page',{
        cart: productsInCart,
        amount: {subtotal: amount, total: amount + 5}
    });
});
//--- Inserts into the cart a new product
router.post('/cart/:id', (req, res) => {
    console.log(req.params.id);
    let aux = cartService.getElement(req.params.id);
    let quant = parseInt(req.body.quant);
    console.log(aux);
    if(aux != undefined){
        aux.ocurrences += quant
        cartService.insertElement(req.params.id, aux);
    }else{
        cartService.insertElement(req.params.id,{id: req.params.id, ocurrences: quant});
        console.log(cartService.getElement(req.params.id));
    }
    //alert("El producto ha sido añadido al carrito");
    res.redirect('back');
});

export default router;