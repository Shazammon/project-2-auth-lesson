// required packages
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts') // this is the middleware that creates the "body" on the layout.ejs file


// config express app/middlewares
const app = express() // this gives us an instance of an express route
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(ejsLayouts) // this is the middleware that creates the "body" on the layout.ejs file

//route definitions
app.get('/', (req, res) => {
    res.render('home.ejs')
})

// listen on a port
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
