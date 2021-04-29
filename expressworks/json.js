const express = require('express')
const app = express()
const fs = require('fs')
const port = process.argv[2]


app.get('/books', function(req, res){
    const file = process.argv[3]
    fs.readFile(file, function(element, data){
        if (element) return res.sendStatus(500)
        try {
            books = JSON.parse(data)
        } catch (element) {
            res.sendStatus(500)
        }
        res.json(books)
    })
})
app.listen(port)