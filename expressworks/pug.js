const express = require('express')
const app = express()
const port = process.argv[2]
const indexPug = process.argv[3]

app.set('views', indexPug)

app.set('view engine', 'pug')
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
  })

app.listen(port)