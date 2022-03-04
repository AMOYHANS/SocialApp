const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true}, () => {
    console.log("Connected to MongoDB....")
} )

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
 
app.get("/", (req, res) => {
    res.send("welcome to homepage") 
})
app.get("/user", (req, res) => {
    res.send("welcome to user") 
})

app.listen(8000, () => {
    console.log("Backend Server Running...")
})