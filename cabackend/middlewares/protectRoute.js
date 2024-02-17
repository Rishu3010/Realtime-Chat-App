import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "You must be logged in" });
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(401).json({error: "Invalid token"});
        }
      

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: "No user found with this token" });
        }
        

  

        req.user = user;

        next();
    } catch (error) {
        console.log("error in protected middleware",error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
};

export default protectRoute;
