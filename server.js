const express = require('express')
const mongoose = require('mongoose')
const { Schema, model } = mongoose
const app = express()
const connOptions = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }

// on deployment servers typically the 
// env variable "NODE_ENV" is already SET with the value "production"
if(process.env.NODE_ENV == "production") {
  console.log("production env")
  require("dotenv").config()
}
// if not production => load our LOCAL environment configuration
else {
  require("dotenv").config({ path: "./.env.dev" })
  console.log("development env")
}

// *** MONGODB ***
mongoose.connect(process.env.MONGODB_URI, connOptions)
.then(() => console.log("Database connection established"))

const FruitSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, default: "yellow" },
})

const Fruit = model("Fruit", FruitSchema);

app.get("/", (req, res, next) => {
  res.send("Hey, this deploy thing is working!")
})

app.get("/fruits", async (req, res, next) => {
  
    const fruits = await Fruit.find()
    res.send(fruits)
 

})

app.get("/env",  (req,res,next) => {
  res.json({
    key: process.env.NODE_ENV
  })
})

let port = 5000
app.listen(port, () => console.log("API up and running..."))
