const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kishan_31:4GdZARnCyGUbPKKw@cluster0.d5f50qs.mongodb.net/kishan2345?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

    .then(() => console.log("HELLO MR.KISHAN YOUR MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3600, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3600))
});
