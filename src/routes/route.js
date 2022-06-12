const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("HEY MOHIT HOW ARE YOU! I AM READY FOR YOU !")
})

router.post("/createUser", UserController.createUser  )
router.post("/createbook", UserController.createbook  )
router.get("/getUsersData", UserController.getUsersData)

module.exports = router;