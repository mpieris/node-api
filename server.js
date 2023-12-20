const express = require('express')
const app = express()
console.log('Hello')

app.get('/', (req, res) => {
    res.send("Hi Node API")
})

app.listen(3000, () => {
    console.log(`Node API is running on port 3000`)
})