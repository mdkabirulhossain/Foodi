import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe"
import 'dotenv/config'

const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY)
// console.log(process.env.STRIPE_SECRETE_KEY)
//placing user order for frontend
const placeOrder = async (req, res)=>{

    const frontend_url = "http://localhost:5173" ;
    try{
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,

        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"USD",
                product_data:{
                    name:item.name
                },
                unit_amount: item.price *100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"USD",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount: 2*100
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        })

        res.json({
            success:true,
            session_url:session.url
        })
    }catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Error"
        })
    }
}

const verifyOrder = async(req, res)=>{
    const{ orderId, success} = req.body;
    try{
        if(success =="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({
                success:true,
                message:"Payment Successful"
            })
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({
                success:false,
                message:"Payment Unsuccessful"
            })
        }
    }catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Error"
        })
    }
}

//front end user order
const userOrders = async(req, res)=>{
    try{
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({
            success:true,
            data:orders
        })

    }catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Error"
        })
    }
}

//Order list for admin
const listOrders = async(req, res)=>{
    try{
        const orders = await orderModel.find({});
        res.json({
            success:true,
            data:orders
        })

    }catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Error"
        })
    }
}

//update order status
const updateStatus =async(req, res)=>{
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({
            success:true,
            message:"Status updated"
        })
    }catch(error){
        console.log("Error");
        res.json({
            success:false,
            message:"Status not updated"
        })
    }
}

export{
    placeOrder,
    verifyOrder,
    userOrders,
    listOrders,
    updateStatus,
}