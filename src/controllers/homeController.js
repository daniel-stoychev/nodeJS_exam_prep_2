import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.render('home', {
    });
});

homeController.get('/catalog', (req, res) => {
    res.render('catalog');
});


export default homeController;