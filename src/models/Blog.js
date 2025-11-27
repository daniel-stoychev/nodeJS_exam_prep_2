import { Schema, model, Types } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Title should be at least 5 chars long!'],
        maxLength: [50, 'Title should not be more than 50 chars long!']
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//,
    },
    content: {
        type: String,
        required: true,
        minLength: [10, 'Content should be at least 10 chars long!']
    },
    category: {
        type: String,
        required: true,
        minLength: [3, 'Category should be at least 3 chars long!']
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    follower: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
})

const Blog = model('Blog', blogSchema);

export default Blog;