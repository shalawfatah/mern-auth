import jwt from 'jsonwebtoken'

export const authorization = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) res.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.uers = verified
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}