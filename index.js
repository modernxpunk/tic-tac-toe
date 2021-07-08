const express = require('express')
const app = express()

const port = 3000
const host = '127.0.0.1'

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, host, () => {
    console.log('start')
})