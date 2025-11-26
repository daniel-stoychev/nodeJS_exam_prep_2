import Blog from "../models/Blog.js"

export default {
    async create(blogData, userId) {
        await Blog.create({
            ...blogData,
            owner: userId
        });
    },
    getAll() {
        const allBlogs = Blog.find();
        return allBlogs;
    },
    async getOne(blogId) {
        const selectedBlog = await Blog.findById(blogId).populate('owner');
        return selectedBlog;
    },
    deleteOne(blogId) {
        return Blog.findByIdAndDelete(blogId);
    },
    async updateBlog(userId, blogData) {
        await Blog.findByIdAndUpdate(userId, blogData);
    }

}