//import
express = require('express')
var cors=require('cors')
require('./connection')
const employeeModel=require('./model/employee')
//2.initiaize
var app = express()
//mid
app.use(express.json());
app.use(cors())
//3.api creation
app.get('/', (req, res) => {
  res.send("message from server")
})
app.get('/trial', (req, res) => {
    res.send("This is a Trial Message")
})
// api to add data to db
app.post('/add', async (req, res) => {
    const result = await new employeeModel(req.body);
    result.save();
    res.send("data added")
})
// api to view data from db
app.get('/view', async (req, res) => {
    let result = await employeeModel.find();
    res.json(result);
})




//4.port setting
app.listen(3004, () => {
    console.log('Listening on port 3004')
})