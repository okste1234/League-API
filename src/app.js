const express = require("express")
const mongoose = require('mongoose');
const app = express()

app.use(express.json())
app.use(express(express.urlencoded({ urlencoded: false })))


app.use("/", require("./router/leagueRouter"))
app.use("/teams", require("./router/teamRouter"))
app.use("/players", require("./router/playerRouter"))


// mongoose connect + app listen
mongoose.set("strictQuery", false)
mongoose.
    connect("mongodb+srv://okste:okste123456@cluster0.pozvf7h.mongodb.net/League-API?retryWrites=true&w=majority")
    .then(() => {
        console.log("connected to MDB")
        app.listen(3000, () => {
            console.log("Node API is running on PORT 3000")
        })
    }).catch((error) => {
        console.error(error)
    })









// routes GET
// leagues
// app.get("/", async (req, res) => {
//     try {
//         const leagues = await League.find({})
//         res.status(200).json(leagues)
//     } catch (error) {
//         console.error(error.message);
//         res.sendStatus(500).json({ message: error.message })
//     }
// })


// teams
// app.get("/teams", async (req, res) => {
//     try {
//         const teams = await Team.find({})
//         res.status(200).json(teams)
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })


// players
// app.get("/players", async (req, res) => {
//     try {
//         const players = await Player.find({})
//         res.status(200).json(players)
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })






// route POST

//leagues
// app.post("/", async (req, res) => {
//     try {
//         const leagues = await League.create(req.body)
//         res.status(200).json(leagues)

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })



//team
// app.post("/teams", async (req, res) => {
//     try {
//         const teams = await Team.create(req.body)
//         res.status(200).json(teams)
//     } catch (error) {
//         console.error(error.message);
//         res.sendStatus(500).json({ message: error.message })
//     }
// })


//players
// app.post("/players", async (req, res) => {
//     try {
//         const players = await Player.create(req.body)
//         res.status(200).json(players)
//     } catch (error) {
//         console.error(error.message);
//         res.sendStatus(500).json({ message: error.message })
//     }
// })




// route PUT (update)
// player

// app.put("/players/:id", async (req, res) => {
//     try {
//         const { id } = req.params
//         const player = await Player.findByIdAndUpdate(id, req.body)
//         if (!player) {
//             res.status(404).json({ message: `cannot find player with the ID: ${id}` })
//         }

//         const updatedPlayer = await Player.findById(id)
//         res.status(200).json(updatedPlayer)

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// })

