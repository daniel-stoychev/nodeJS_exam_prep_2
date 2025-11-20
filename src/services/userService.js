import User from "../models/User.js"

export default {
    async register(userData) {
        await User.create(userData);
    }
}