import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function authMiddleware(req, res, next) {

    const token = req.cookies['auth'];

    const secretKey = process.env.JWT_SECRET;
    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.decode(token, secretKey);

        req.user = decodedToken;
        req.isAuthenticated = true;

        res.locals.user = decodedToken;
        res.locals.isAuthenticated = decodedToken;
        next();

    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/');
    }

}

export function isAuth(req, res, next) {
    if (!req.isAuthenticated) {
        res.redirect('/auth/logins');
    }
    next();
}

export function isGuest(req, res, next) {
    if (req.isAuthenticated) {
        res.redirect('/');
    }
    next();
}
