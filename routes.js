import { Router } from "express";
import homeController from "./src/controllers/homeController.js";
import authController from "./src/controllers/authController.js";
import blogController from "./src/controllers/blogController.js";

const routs = Router();

routs.use(homeController);

routs.use('/auth', authController);
routs.use('/login', authController);
routs.use('/blogs', blogController);

routs.get('/*splat', (req, res) => {
    res.status(400).render('404');
});

export default routs;