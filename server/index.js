const express = require("express");
const cors = require("cors")
const env = require("dotenv")
const cookie = require("cookie-parser")
const userController = require("./controllers/user.controller")
const tokenService = require('./services/token.service')
const apiErrorHandler = require('./middleware/exception.middleware');
const authothicationMiddleware = require("./middleware/authothication.middleware");

env.config()

const PORT = process.env.PORT

const app = express()


app.use(cors())
app.use(express.json())
app.use(cookie())


app.post('/registration',userController.registration)
app.post('/login',userController.login)
app.post('/logout',userController.logout)
app.get('/refresh',userController.refresh)
app.get('/users',authothicationMiddleware,userController.getAllUsers)
app.get('/tokens',authothicationMiddleware,tokenService.getAll)

app.use(apiErrorHandler)

app.listen(PORT,()=>{
	console.log(`Server started on port: ${PORT}`)
})
