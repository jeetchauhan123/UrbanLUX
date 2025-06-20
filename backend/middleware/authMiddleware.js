const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const user = require("../models/userModel")

dotenv.config();

const authMiddleware = (req, res, next) => {
    const authHeader  = req.headers.authorization;

    console.log("authHeader:", authHeader);

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: "Authorization header missing"})
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message:"no token provided"
        });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("decoded:", decoded);
        req.user = decoded; // You can access req.user.id later
        next();
    }
    catch (err) {
        res.status(403).json({
            message: "Invalid token"
        })
    }
}

module.exports = authMiddleware;