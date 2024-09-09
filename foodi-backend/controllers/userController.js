import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"




//login
const loginUser = async(req, res)=>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false, message:"user not exist"})
        }
        
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false, message:"Wrong password"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})

    }catch(error){
        console.log("Error");
        res.json({success:false,message:"Error"})
    }
}

//token
const createToken = (id)=>{
    // console.log("random#secret")
    return jwt.sign({id},"random#secret")
}



//signup
const registerUser = async(req, res)=>{
    const{name, password, email} = req.body;
    try{
        //check user exist or not
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"user already exists"})
        }
        //validate email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"password length minimum 8"})
        }

        //hash user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);


        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

       const user = await newUser.save()
       const token = createToken(user._id)
       res.json({success:true,token})
    }catch(error){
        console.log("Error");
        res.json({success:false,message:"Error"})
    }
}



export {loginUser,
    registerUser
}