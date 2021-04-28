const express = require('express')
const app = express()
const port = process.argv[2]
const index = process.argv[3]

app.use(express.static(index || Path2D.join(__expressworks, 'public')))
app.listen(port)