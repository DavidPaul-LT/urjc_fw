import express from 'express';
import * as storageService from './storageService.js';
import * as cartService from './cartService.js';

const router = express.Router();
/*
    ----- MAIN PAGE -----
*/
//--- Gets from the storage first five product instances
router.get('/', (req, res) => {
    res.render('index', { 
        storage: storageService.getStorage().slice(0,5)
    });
});
//--- Loads more products (uses AJAX)
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
/*
    ----- COMMON FORM UTILS -----
*/
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
    res.render('product_page', {
        product: storageService.getElement(req.params.id),
        subElements: storageService.discartDefaultAtt(req.params.id),
        storage: storageService.relatedProducts()
    });
});
//--- Loads the product's modificaton form
router.get('/product/:id/form', (req, res) => {
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
        try {
            productsInCart.push({id: product.id, name: info.name, image: info.image, price: info.price, ocurrences: product.ocurrences});    
            amount += info.price * product.ocurrences;
        } catch (TypeError) {
            console.log("Product cannot be pushed because its been deleted")
            cartService.removeElement(product.id);
        }
    }
    res.render('cart_page',{
        cart: productsInCart,
        amount: {subtotal: amount, total: amount + 5}
    });
});
//--- Inserts into the cart a new product
router.post('/cart/:id', (req, res) => {
    let aux = cartService.getElement(req.params.id);
    let quant = parseInt(req.body.quant);
    console.log(aux);
    if(aux != undefined){
        aux.ocurrences += quant
        cartService.insertElement(req.params.id, aux);
    }else{
        cartService.insertElement(req.params.id,{id: req.params.id, ocurrences: quant});
    }
    res.redirect('back');
});
//--- Deletes a product from cart given its id
router.get('/cart/delete/:id', (req, res) => {
    cartService.removeElement(req.params.id);
    res.redirect('/cart');
});
//--- Decreases in 1 a cart product's ocurrence
router.get('/decrease/:id', (req, res) => {
    let aux = cartService.getElement(req.params.id);
    if((aux[1] > 1) && (req.params.id == aux[0])){
        cartService.insertElement(aux[0],[aux[0],aux[1]-1])
        res.redirect('/cart');
    }
});
//--- Increases in 1 a cart product's ocurrence
router.get('/increase/:id', (req, res) => {
    let aux = cartService.getElement(req.params.id);
    if(req.params.id == aux[0]){
        cartService.insertElement(aux[0],[aux[0],aux[1]+1])
        res.redirect('/cart');
    }
});

export default router;