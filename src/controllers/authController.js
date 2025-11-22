import { Router } from "express";
import userService from "../services/userService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {

    const userData = req.body;
    const token = await userService.register(userData);
    console.log(token);


    res.cookie('auth', token);
    res.redirect('/');

    res.end();
});

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);

    res.cookie('auth', token);
    res.redirect('/');


});

export default authController;