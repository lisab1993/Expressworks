const express = require('express')
const app = express()
const port = process.argv[2]


app.put('/message/:id', function(req, res){ 
    req.params.id
    require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
 })
app.listen(port)