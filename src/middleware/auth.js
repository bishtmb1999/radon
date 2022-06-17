const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
    
    
     const authentication = function (req, res,next) {
    try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-radon")

    console.log(decodedToken)
     if (!decodedToken) return res.send({ status: false, msg: " token is invalid " });

 req.userId =decodedToken.userId
  next();
  }
  catch(error){
    res.status(400).send({msg: error.message});
  };
}


     const auth = function (req, res,next) {
    try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-radon")
    req.decodedToken = decodedToken
    if (!decodedToken) return res.send({ status: false, msg: " token is invalid " })
  
  next();
  }
  catch (error) { return res.status(400).send({ status: false, msg: error }) }

}
 

  