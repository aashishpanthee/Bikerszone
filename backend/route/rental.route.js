const express = require("express");
const router = express.Router();
const rentalController = require("../controller/rentel.controller")
const verifyMiddleware = require("../middleware/verifacation")





router.post("/",verifyMiddleware.verification,rentalController.addRental)
router.get ("/bike",rentalController.allRentedBike)
router.get ("/bike/:id",rentalController.rentedBikeId)



module.exports=router