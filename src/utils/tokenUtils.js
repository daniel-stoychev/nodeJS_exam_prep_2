import 'dotenv/config'

import jwt from 'jsonwebtoken';

export function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    }
    const secretKey = process.env.JWT_SECRET;

    const token = jwt.sign(payload, secretKey, { expiresIn: '2h' });


    return token;
}