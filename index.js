const express = require('express')
const Dotenv = require("dotenv").config()
const { default: mongoose } = require('mongoose')
const studentRouter = require("./Routes/StudentsRoutes")
const errorHandler = require('./Middleware/errorHandler')



const app = express()

app.get('/', (req, res) =>{
res.send("My Server Home Page")})

const Port = process.env.PORT 
mongoose.connect(process.env.MY_DB_PASS)
.then(() => {
    app.listen(Port, ()=>{
        console.log(`server serves on port ${Port}`);
        
    })
}).catch((err) => {
    console.log(err.message);
    
});

// My Middleware
app.use(errorHandler)
app.use(express.urlencoded({extended:true}))
app.use(express.json)
app.use("/", studentRouter)
