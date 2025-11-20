import { Router } from "express";
import homeController from "./src/controllers/homeController.js";
import authController from "./src/controllers/authController.js";

const routs = Router();

routs.use(homeController);

routs.use('/auth', authController);
routs.use('/login', authController);

export default routs;