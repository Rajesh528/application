const express = require('express');
const app = express();
const cors = require('cors');
var port = 8080;
app.use(cors());

var UsersInfo = [
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"},
    {email:"test@gmail.com", password:"12345" , confirmPassword:"", userName : "test"}
];


app.get('/', (req, res)=>{
    res.send("Welcome to Node");
})

app.get('/userDetails', (req, res)=>{
    res.send(UsersInfo);
})

app.listen(port, ()=>{
    console.log("server running on pot" + port);
})

