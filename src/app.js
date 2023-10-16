const express = require("express")
const app = express()

// routes
app.get("/", (req, res) => {
    res.send("Hello Node API")
})


// listen
app.listen(5000, () => {
    console.log("Node API is running on PORT 5000")
})