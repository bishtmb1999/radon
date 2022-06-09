const express = require('express');
const router = express.Router();
const controller = require("../controllers/Controller.js")

router.post("/createAuthor", controller.createAuthor)
//router.get("/getUsersData", controller.getUsersData)

router.post("/createbook", controller.createBook)

router.get("/listBooks", controller.listBooks)

router.get("/findAuthor", controller.findAuthor)

router.get("/findBooks", controller.findBooks)


module.exports = router;