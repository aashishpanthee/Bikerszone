const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller")

const token = require("../middleware/verifacation")




router.post("/signup",userController.signUp)
router.post("/login",userController.login)



module.exports=router