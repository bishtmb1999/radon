const UserModel= require("../models/userModel")


const createUser = async function (req, res) {
    let data = req.body;
    let saveData = await UserModel.create(data);
    res.send({ msg: saveData });
}


module.exports.createUser= createUser
