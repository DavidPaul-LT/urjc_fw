import express from 'express';
import * as storageService from './storageService.js';

const router = express.Router();
//---gets from -storage- all the Product instances
router.get('/', (req, res) => {
    res.render('index', { 
        products: storageService.storage.getElements()
    });
}); 
//--- POST from Insertion Form
router.post('/post/new', (req, res) => {
    let { user, title, text } = req.body;
    boardService.addPost({ user, title, text });
    res.render('saved_post');
});
//---gets from -storage- the Product whose -id- is param id
router.get('/post/:id', (req, res) => {
    let product = storageService.storage.getElement(req.params.id);
    res.render('show_post', { product });
});
//---removes from -storage- the Product associated with param id key
router.get('/post/:id/delete', (req, res) => {
    storageService.storage.deleteElement(req.params.id);
    res.render('deleted_post');
});

export default router;