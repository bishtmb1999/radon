const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const createAuthor = async function (req, res) {
    let data = req.body
    let saveData = await authorModel.create(data);
    res.send({ msg: saveData })
}

const createBook = async function (req, res) {
    let data = req.body;
    let saveData = await bookModel.create(data);
    res.send({ msg: saveData })
}
//const getUsersData= async function (req, res) {
  //  let saveData= await bookModel.find()
    //res.send({msg: saveData})
    
//}
const listBooks = async function (req, res) {
    let Data = await authorModel.find({ author_name: "Chetan Bhagat" })//.select("author_id")
    let getData = await bookModel.find({author_id:Data.author_id});
    res.send({ msg:getData})
}

const findAuthor = async function (req, res) {
    let data = await bookModel.find({ namndOneAndUpde: "Two states" }, { $set: { price: 100 } })
    let getData = await authorModel.find({ author_id: data.author_id }).select({ author_name: 1, _id: 0 });
    let newPrice = await bookModel.find({ name: "Two states" }).select({ price: 1, _id: 0 });
    res.send({ msg: getData, newPrice })
}

const findBooks = async function (req, res) {
    let arr = [];
    let temp = 0;
    let a = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
    for (let i = 0; i < a.length; i++) {
        let getData = await authorModel.find({ author_id: a[i].author_id }).select({ author_name: 1, _id: 0 });
        arr[temp++] = getData;
    }

    res.send({ msg: arr })
}

module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.listBooks = listBooks;
module.exports.findAuthor = findAuthor;
module.exports.findBooks = findBooks;
//module.exports.getUsersData= getUsersData