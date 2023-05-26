const express = require("express");
const router = express.Router();
const bikeController = require("../controller/bike.contoller")
const verifyMiddleware = require("../middleware/verifacation")
const imageUpload = require("../helpers/image-uploader")





router.post("/",imageUpload.upload.single('image'),bikeController.addBike)
router.get("/all",bikeController.allBike)
router.get("/:id",bikeController.showBike)
router.delete("/delete/:id",bikeController.deleteBike)
router.put("/update/:id",imageUpload.upload.single('image'),bikeController.updateBike)



module.exports=router