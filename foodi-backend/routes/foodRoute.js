import express from "express"
import { addFood, postFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();


//Image Storage
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"),addFood)
foodRouter.post("/post", upload.single("image"),postFood)
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);


export default foodRouter;