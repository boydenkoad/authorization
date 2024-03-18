const jwt = require('jsonwebtoken')
const env = require('dotenv')
const {BadRequestError,UnauthorizedError} = require('../exceptions/api-errors')

const tokenService = require('../services/token.service')
env.config()


module.exports = async function(req,res,next){
	try{
		const authHeader = req.headers['authorization']

		if(!authHeader) return next(new UnauthorizedError())

		const token = authHeader.split(' ')[1]

		const data = await tokenService.validateAccessToken(token)

		if(!data) return next(new UnauthorizedError())

		next()
	}catch(e){
		next(e)
	}
	
} 
