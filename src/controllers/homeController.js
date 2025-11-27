import { Router } from "express";
import blogService from "../services/blogService.js";
import User from "../models/User.js";
import Blog from "../models/Blog.js";

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

homeController.get('/profile', async (req, res) => {
    const currentUserId = req.user.id;
    const currentProfile = await User.findById(currentUserId);
    const createdBlogs = await Blog.find({ owner: currentUserId });
    const followedBlogs = await Blog.find({ follower: currentUserId });

    res.render('profile', {
        user: currentProfile,
        createdBlogs,
        createdBlogsNumber: createdBlogs.length,
        followedBlogs,
        followedBlogsNumber: followedBlogs.length,
    });
});

export default homeController;