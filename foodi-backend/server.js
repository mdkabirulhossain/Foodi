import express from "express"
import cors from "cors"
import { connectDB } from "./config/database.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv';
import cartRouter from "./routes/cartRoute.js";

dotenv.config();



const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


//Database Connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)


app.get("/", (req, res)=>{
    res.send("Server is Working!!");
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
