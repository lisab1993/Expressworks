const express = require('express')
const app = express()
const port = process.argv[2]

app.get('/search', function(req, res){
    let output = req.query
    res.send(output)
})
app.listen(port)