import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import blogService from "../services/blogService.js";

const blogController = Router();

blogController.get('/', async (req, res) => {
    const allBlogs = await blogService.getAll();

    res.render('blogs/catalog', { allBlogs });
})

blogController.get('/create', isAuth, (req, res) => {
    res.render('blogs/create');
});

blogController.post('/create', isAuth, async (req, res) => {
    const blogData = req.body;
    const userId = req.user.id;

    try {
        await blogService.create(blogData, userId);
        res.redirect('/blogs');
    } catch (err) {
        let errorMessage = err.messsage;

        if (err.name === 'ValidationError') {
            errorMessage = Object.values(err.errors)[0];
        }
        res.status(400).render('blogs/create', {
            error: errorMessage
        })
    }


})

blogController.get('/:id', async (req, res) => {

    const blogId = req.params.id;
    const selectedBlog = await blogService.getOne(blogId);
    const isOwner = selectedBlog.owner && selectedBlog.owner.equals(req.user?.id);


    if (req.user !== undefined) {
        const userId = req.user.id;
        const isFollower = selectedBlog.follower.includes(userId);
        res.render('blogs/details', { selectedBlog, isOwner, isFollower });
    } else {
        res.render('blogs/details', { selectedBlog, isOwner });
    }



});

blogController.get('/:id/delete', async (req, res) => {
    const blogId = req.params.id;
    const selectedBlog = await blogService.getOne(blogId);
    const isOwner = selectedBlog.owner && selectedBlog.owner.equals(req.user?.id);

    if (isOwner) {
        await blogService.deleteOne(blogId);
        res.redirect('/blogs')
    } else {
        throw new Error("Not owner - cannot delete!");
    }

    res.end();
});

blogController.get('/:id/edit', isAuth, async (req, res) => {

    const blogId = req.params.id;
    const selectedBlog = await blogService.getOne(blogId);

    res.render('blogs/edit', { selectedBlog });
});

blogController.post('/:id/edit', isAuth, async (req, res) => {
    const blogId = req.params.id;
    const currentBlog = await blogService.getOne(blogId);

    const isOwner = currentBlog.owner && currentBlog.owner.equals(req.user?.id);


    if (isOwner) {
        await blogService.updateBlog(blogId, req.body);
        res.redirect(`/blogs/${blogId}`);
    } else {
        throw new Error("Now owner - cannot edit!");
    }

})

blogController.get('/:id/follow', async (req, res) => {
    const blogId = req.params.id;
    const userId = req.user.id;

    await blogService.follow(blogId, userId);

    res.redirect(`/blogs/${blogId}`);
})




export default blogController;