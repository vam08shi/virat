
import User from "../models/usermodel.js"
import bcrypt from "bcryptjs"

export const registerController = async (req, res)=>{
    console.log("isnide reg")
    const {name, email, password, mobileNumber} = req.body
    let userData
    try{
        userData = await User.find({email:email})    
    }catch(err){
        console.log("mongoDB err", err)
    }


    if(userData?.length){
        return res.json({message:"Email ID is already registered"})
    }

    const user = new User({
        name,
        password:bcrypt.hashSync(password),
        email,
        mobileNumber
    })

    try{
        await user.save()
    }catch(err){
        console.log(err)
    }
    

    return res.status(200).json({message :"Data saved successfully"})

}

export const loginController = async (req, res)=>{
    const {email, password} = req.body

    let userData
    try{
        userData = await User.findOne({email:email})    
    }catch(err){
        console.log("mongoDB err", err)
    }

    if(!userData){
        return res.status(404).json({message:"register first"})
    }

    console.log(userData)
    const isPasswordCorrect = bcrypt.compareSync(password, userData.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password" });
    }     

    
    return res.status(200).json({message :"login successfully"})

}

export const updateController = async(req, res) =>{
    // const {name, email} = req.body
    
    const {id} = req.params
    

}