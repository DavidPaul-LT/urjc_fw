import express from 'express';
import * as storageService from './storageService.js';

const router = express.Router();
//---gets from -storage- all the Product instances
router.get('/', (req, res) => {
    let datos = storageService.getStorage();
    res.render('index', { 
        storage: datos
    });
}); 
//--- POST from Insertion Form
router.post('/post/new', (req, res) => {
    let {name, image, price, description} = req.body;
    boardService.addPost({name, image, price, description});
    res.render('saved_product');
});
//---gets from -storage- the Product whose -id- is param id
router.get('/post/:id', (req, res) => {
    let product = storageService.getElement(req.params.id);
    res.render('show_product', {product});
});
//---removes from -storage- the Product associated with param id key
router.get('/post/:id/delete', (req, res) => {
    storageService.removeElement(req.params.id);
    res.render('deleted_product');
});

export default router;