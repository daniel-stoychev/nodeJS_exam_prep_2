import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import blogService from "../services/blogService.js";

const blogController = Router();

blogController.get('/', (req, res) => {
    const allBlogs = blogService.getAll();
    console.log(allBlogs);

    res.end();
    // res.render('/blogs', allBlogs);
})

blogController.get('/create', isAuth, (req, res) => {
    res.render('blogs/create');
});

blogController.post('/create', isAuth, (req, res) => {
    const blogData = req.body;
    const userId = req.user.id;
    const response = blogService.create(blogData, userId);
    res.end('');
})

export default blogController;