import { Router } from "express";
// import Images from "../models/models"
import {getImages,deleteImages,addImages,changeImages,getImage} from "../controllers/controllers.js"
const router=Router()

router.get("/images",getImages)
router.post("/images",addImages)
router.put("/images/:id",changeImages)
router.get("/images/:id",deleteImages)
router.delete("/images/:id",getImage)

export default router
