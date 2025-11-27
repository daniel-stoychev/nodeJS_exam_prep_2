import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        minlength: [2, 'Username too short!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minlength: [10, 'Email should be at least 10 chats long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: [4, 'Password too short!']
    },
});

userSchema.virtual('rePassword')
    .get(function () {
        return this._rePassword;
    })
    .set(function (value) {
        this._rePassword = value;
    });

userSchema.pre('validate', function () {
    if (this.isNew && this.password !== this._rePassword) {
        this.invalidate('rePassword', 'Passwords missmatch!')
    }
});

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = model('User', userSchema);

export default User;