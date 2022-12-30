import express from 'express';
import * as storageService from './storageService.js';
import * as form from './form.js';

const router = express.Router();
//---gets from -storage- all the Product instances
router.get('/', (req, res) => {
    c
    res.render('index', { 
        storage: datos
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
    let datos = storageService.getStorage();
    form.Form.showFormInputs(datos, req.params.id);
    let product = storageService.getElement(req.params.id);
    res.render('show_product', {product});
});
//---removes from -storage- the Product associated with param id key
router.get('/product/:id/delete', (req, res) => {
    storageService.removeElement(req.params.id);
    res.redirect('/');
});

export default router;