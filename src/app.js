require('dotenv').config();
require('express-async-errors');



const express = require("express")
const mongoose = require('mongoose');
const app = express()

app.use(express.json())
app.use(express(express.urlencoded({ extended: true })))


const router = require('./router/index')


app.get('/', (req, res) => {
    res.json(" Welcome to our Football API")
})

app.use(router)


// mongoose connect + app listen
mongoose.set("strictQuery", false)
mongoose.
    connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to MDB")
        app.listen(3000, () => {
            console.log("Node API is running on PORT 3000")
        })
    }).catch((error) => {
        console.error(error)
    })
