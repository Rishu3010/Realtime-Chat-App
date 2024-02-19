
import bcypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {

    try{
        const {fullName, role, email, password, confirmPassword, gender} = req.body;
        if(!fullName || !role || !email || !password || !confirmPassword)
        {
            return res.status(422).json({error: "Please fill all the fields"});
        }
        if(password !== confirmPassword)
        {
            return res.status(422).json({error: "Passwords do not match"});
        }
        if(password.length < 6)
        {
            return res.status(422).json({error: "Password must be at least 6 characters long"});
        }
        
        const user = await User.findOne({email});
        if(user)
        {
            return res.status(422).json({error: "User already exists with this email"});
        }

        // Hashing the password

        const salt = await bcypt.genSalt(10);
        const hashedPassword = await bcypt.hash(password, salt);

        
        const [firstName, lastName] = fullName.split(" ");
        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${firstName}+${lastName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${firstName}+${lastName}`;

        const newUser = new User({
            fullName,
            role,
            email,
            password: hashedPassword,
            gender,
            profilePicture: gender==="male" ? boyProfilePic : girlProfilePic
        });

        if(newUser){

            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
            _id: newUser._id, 
            fullName: newUser.fullName, 
            email: newUser.email, 
            role: newUser.role,
            profilePicture: newUser.profilePicture
        });
        }
        else{
            res.status(500).json({error: "Failed to create user"});
        }



        
    }
    catch(error){
        console.log(`Error: `,error);
        res.status(500).json({error: "Internal Server error"});
    }
}

export const login = async (req, res) => {
    try{
        console.log("Login request received", req.body);
        const {email, password} = req.body;
        console.log("email:", email);
        console.log("password", password);
        if(!email || !password)
        {
            return res.status(422).json({error: "Please fill all the fieldss"});
        }
        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(422).json({error: "Invalid Credentials"});
        }
        const isPasswordCorrect = await bcypt.compare(password, user.password || "");
        if(!isPasswordCorrect) return res.status(422).json({error: "Invalid Credentials"});
        console.log("User:", user);
        

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id, 
            fullName: user.fullName, 
            email: user.email, 
            role: user.role,
            profilePicture: user.profilePicture
        });

    }
    catch(error){
        console.log(`Error: `,error);
        res.status(500).json({error: "Internal Server error"});
    }
}

export const logout = async (req, res) => {
    try{
        // res.cookie("jwt", "", {maxAge: 0})
        res.clearCookie("jwt");
        res.status(200).json({message: "Logged out successfully"});
    }
    catch(error){
        console.log(`Error: `,error);
        res.status(500).json({error: "Internal Server error"});
    }
}
