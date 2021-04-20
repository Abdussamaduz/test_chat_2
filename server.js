const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

// const HomeRoute = require('./routes/HomeRoute')
// const AboutRoute = require('./routes/AboutRoute')


// environment -- start
require('dotenv').config()
const PORT = process.env.PORT || 8800
// environment -- end


// app.use(AboutRoute.path, AboutRoute.router)
// app.use(HomeRoute.path, HomeRoute.router)


// listen -- start
app.listen(PORT, _ => console.log(`${PORT}ga ulandi`))
// listen -- end 


// MiddleWares -- start
const authMiddleware = require('./middleware/auth')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser())
app.use(authMiddleware)
// MiddleWares -- end


// Settings -- start
app.set('view engine', 'ejs')
// Settings -- end

// routes -- start
const routePath = path.join(__dirname, 'routes')
fs.readdir(routePath, (error, files) => {
    // console.log(error);
    files.forEach(file => {
        let filePath = path.join(routePath, file)
        let Route = require(filePath)
        if(Route.path && Route.router) app.use(Route.path, Route.router)
    })
})
// routes -- start