const express = require('express')
const app = express()
const port = process.argv[2]


app.put('/message/:id', function(req, res){ 
    let message_id = req.params.id
    let sha1 = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + message_id)
        .digest('hex')
    res.send(sha1)
 })
app.listen(port)