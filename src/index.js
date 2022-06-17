const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kingmb1999:HcGOBJtOhe8idOGZ@cluster0.chezi.mongodb.net/M-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("HELLO MR. MOHIT MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3100, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3100))
});
