import express from 'express';
import * as storageService from './storageService.js';
import * as cartService from './cartService.js';

const router = express.Router();
//---gets from -storage- all the Product instances
router.get('/', (req, res) => {
    res.render('index', { 
        storage: storageService.getStorage().slice(0,5)
    });
});
//---loads more products
router.get('/loadProducts', (req, res) => {
    const begin = parseInt(req.query.begin);
    const to = parseInt(req.query.end);
    res.render('storage', {
        storage: storageService.getStorage().slice(begin,to)
    });
});
//--- POST from Insertion Form
router.post('/product/new', (req, res) => {
    let {name, image, price, description} = req.body;
    boardService.addPost({name, image, price, description});
    res.render('saved_product');
});
//---gets from -storage- the Product whose -id- is param id
router.get('/product/:id', (req, res) => {
    let product = storageService.getElement(req.params.id);
    res.render('product_page', {product});
});
//---removes from -storage- the Product associated with param id key
router.get('/product/:id/delete', (req, res) => {
    storageService.removeElement(req.params.id);
    res.render('deleted_product');
});
//--- goes to the cart page
router.get('/cart',(req, res) => {
    res.render('cart_page',{
        cart: cartService.getCart()
    });
});
//---insert into -cart- a new product
router.get('/cart/:id', (req, res) => {
    let aux = cartService.getElement(req.params.id);
    if(aux != undefined){
        let info = storageService.getElement(req.params.id);
        cartService.insertElement(req.params.id,[info.name, info.price,1]);
    }else{
        cartService.insertElement(req.params.id,[aux[0],aux[1],aux[2]+1]);
    }
    res.redirect('back');
});

export default router;