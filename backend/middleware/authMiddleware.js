const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const authHeader  = req.headers.authorization;

    console.log("authHeader:", authHeader);

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        console.log("Missing or invalid auth header");
        return res.status(401).json({message: "Authorization header missing"})
    }

    console.log("test1");
    const token = authHeader.split(" ")[1];
    console.log("Extracted token:", token);

    if(!token){
        return res.status(401).json({
            message:"no token provided"
        });
    }
    console.log("test2");

    try{
        console.log("test3");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded:", decoded);
        console.log("test4");
        req.user = decoded; // You can access req.user.id later
        next();
    }
    catch (err) {
        console.error("JWT Verify Error:", err.message);
        res.status(403).json({
            message: "Invalid token"
        })
    }
}

module.exports = authMiddleware;