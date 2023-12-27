const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const app = express()

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

app.use(express.json())

// Database connection
mongoose
    .connect(DB_URI)
    .then(() => {
        console.log('Connected to the MongoDB')
        app.listen(PORT, () => {
            console.log(`Node API is running on port ${PORT}`)
        })
    }).catch((error) => {
        console.log(error)
    })