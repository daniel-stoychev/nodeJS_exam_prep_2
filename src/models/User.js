import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlenght: [2, 'Username too short!']
    },
    email: {
        type: String,
        required: true,
        minlenght: [10, 'Email should be at least 10 chats long!']
    },
    password: {
        type: String,
        required: true,
        minlenght: [4, 'Password too short!']
    },
});

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = model('User', userSchema);

export default User;