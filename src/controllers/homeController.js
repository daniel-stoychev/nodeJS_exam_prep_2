import { Router } from "express";
import blogService from "../services/blogService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {

    const allBlogs = await blogService.getAll();
    allBlogs.reverse();
    const lastThree = [allBlogs.at(0), allBlogs.at(1), allBlogs.at(3)];

    let isNoPosts = false;
    if (lastThree.length == 0) {
        isNoPosts = true;
    }

    res.render('home', { lastThree, isNoPosts });
});





export default homeController;