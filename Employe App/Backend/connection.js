 var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Abhinandh:neeranjanam11@cluster0.j6v3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected")
    })
    .catch((err) => {
        console.log(err)
    })