import Blog from "../models/Blog.js"

export default {
    async create(blogData, userId) {
        await Blog.create({
            ...blogData,
            owner: userId
        });
    },
    async getAll() {
        await Blog.find();
    }
}