import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://mdkabirulhossainj:zisuOzlQYTnNfnlA@cluster0.h0dp3.mongodb.net/foodi')
    .then(()=>console.log("Database is Connected"))
}