import User from "../models/User.js"
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/tokenUtils.js";

export default {
    async register(userData) {

        const user = await User.create(userData);
        console.log(userData.email);

        const token = generateToken(user);
        return token;
    },
    async login(email, password) {
        if (!email) {
            throw new Error("Email & Password required!");
        }
        if (!password) {
            throw new Error("Email & Password required!");
        }
        const user = await User.findOne({ email });
        console.log('USER');

        console.log(user);


        if (!user) {
            throw new Error("User or password invalid!");
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error("User or password invalid!");
        }

        const token = generateToken(user);

        return token;

    }
}