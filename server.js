const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/ProductModel')
require('dotenv').config();
const app = express()

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

app.use(express.json())

// routes
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
})

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