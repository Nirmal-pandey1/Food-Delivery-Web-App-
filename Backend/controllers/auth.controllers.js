import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/token.js";
import { sendEmail } from "../utils/email.js";
export let signUp  = async(req, res) => {
    try {
        let {fullName, email, password,mobile,role} = req.body;
        let user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        if(password.length<6){
            return res.status(400).json({message:"Password must be at least 6 characters"});
        }
        if(mobile.length<10){
            return res.status(400).json({message:"Mobile number must be at least 10 characters"});
        }
        let hashedPassword=await bcrypt.hash(password,10);
        user=await User.create({
            fullName,
            email,
            role,
            mobile,
            password:hashedPassword
        });
        let token=await genToken(user._id);

        res.cookie("token", token, {
              secure:false,
              sameSite:"strict",
              maxAge:7*24*60*60*1000
        });   
        res.status(201).json({message:"User created successfully",user});

    } catch (error) {   
             res.status(500).json({message:error.message});
    }
}

export let signIn  = async(req, res) => {
    try {
        let {email, password} = req.body;
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
        let isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        let token=await genToken(user._id);
        res.cookie("token", token, {
              secure:false,
              sameSite:"strict",
              maxAge:7*24*60*60*1000
        });   
        res.status(200).json({message:"User signed in successfully",user}); 
    } catch (error) {
        res.status(500).json({message:error.message});
    }       
}

export let signOut  = async(req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({message:"User signed out successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }   
}

export let emailExist  = async(req, res) => {
    try {
        let {email} = req.body;
        let user=await User.findOne({email});
        if(user){
            return res.status(200).json({exist:true});
            
        }
        return res.status(200).json({exist:false});
    } catch (error) {
        res.status(500).json({message:error.message});
    }   
}

export let sendMail  = async(req, res) => {
    try{
        // let {to, subject, text} = req.body;
        await sendEmail("bishtaditya9064@gmail.com", "from POSTMAN API", "jeellp");
        res.status(200).json({message:"Email sent successfully"});


    }
    catch(error){
        res.status(500).json({message:error.message});  
    }
}