import { Router } from "express";
import homeController from "./src/controllers/homeController.js";

const routs = Router();

routs.use(homeController);

export default routs;