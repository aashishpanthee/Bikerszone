const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller")
const verifyMiddleware = require("../middleware/verifacation")





router.post("/signup",userController.signUp)
router.post("/login",userController.login)
router.get("/me",verifyMiddleware.verification,userController.profile)



module.exports=router