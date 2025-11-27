import { Router } from "express";
import userService from "../services/userService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

authController.post('/register', isGuest, async (req, res) => {

    const userData = req.body;
    try {
        const token = await userService.register(userData);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        let errorMessage = err.message;
        if (err.name === 'ValidationError') {
            errorMessage = Object.values(err.errors)[0];
        }
        res.status(400).render('auth/register', {
            error: errorMessage
        })
    }

});

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

authController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        const errMessage = err.message;
        console.log(errMessage);
        console.log(err.name);


        if (err.name === 'ValidationError') {
            errMessage = Object.values(err.errors)[0];
        }
        res.status(400).render('auth/login', {
            error: errMessage
        })
    }

});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default authController;