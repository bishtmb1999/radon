const express = require('express');
const router = express.Router();
const Usercontroller = require("../controllers/userController")
const Productcontroller = require("../controllers/productController")
const Ordercontroller = require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createProduct", Productcontroller.createProduct)

router.post("/createUser",commonMW .mid1, Usercontroller.createUser)

router.post("/createOrder", commonMW.mid1, Ordercontroller.createOrder)

module.exports = router;