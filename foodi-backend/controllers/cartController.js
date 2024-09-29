import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async(req, res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        } else{
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({
            success:true,
            message:"Added To cart"
        });
    }catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Error"
        })
    }
}
//remove items to user cart
const removeFromCart = async(req, res) =>{
   try{
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(cartData[req.body.itemId] > 0){
        cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({
        success:true,
        message:"Remove To cart"
    })
   }
   catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Error"
        })
   }
}
//get items to user cart
const getToCart = async(req, res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({
            success:true,
            cartData
        })
    }catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Error"
        })
    }
}

export{
    addToCart,
    removeFromCart,
    getToCart
}