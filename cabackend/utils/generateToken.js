import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'});
    res.cookie('jwt', token, {
        httpOnly: true, // This means that the cookie cannot be accessed or modified in any way by the browser. Prevents XSS attacks.
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production' ? true : false // This means that the cookie will only be sent over HTTPS in production.
    });

};

export default generateTokenAndSetCookie;