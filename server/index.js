const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const db = require('../db/index')

 
app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/airbnb/listings', (req,res) => {

    db.Listing.find({})
    .then((data) => {
        res.send(data)
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))