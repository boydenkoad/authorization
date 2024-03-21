const { UnauthorizedError, BadRequestError } = require("../exceptions/api-errors")
const tokenService = require("../services/token.service")
const userService = require("../services/user.service")
const userDto = require("../dto/user.dto")

class UserController{

	async registration(req,res,next){
		try{
			const {email,password} = req.body

			if(!email.length || !password.length){
				return res.status(403).json('Ошибка валидации')
			}

			const user = await userService.registration(email,password)

			return res.json({
				message:`Электронный адрес, ${user.email} успешно зарегистрирован.`
			})

		}catch(e){
			next(e)
		}
	}

	async login(req,res,next){

		try{
			const {email,password} = req.body

			if(!email.length || !password.length) next(new BadRequestError("Неверный логин или пароль."))

			const data = await userService.login(email,password)

			await res.cookie("refreshToken",data.refreshToken,{httpOnly:true,maxAge:1000 * 60 * 60*24*30})

			const {
				accessToken,user
			} = data

			return res.json({
				...user,accessToken

			})

		}catch(e){
			next(e)
		}
	}

	async getAllUsers(req,res,next){
		try{
			const users = await userService.getAll()

			const result = users.map(el=>({id:el.id,email:el.email}))

			return res.json(result)

		}catch(e){
			return next(e)
		}
	}

	async logout(req,res,next){

		try{
			const {refreshToken} = req.cookie

			if(!refreshToken) next(new UnauthorizedError())

			await userService.logout(refreshToken)

			res.clearCookie("refreshToken")

			res.end(0)

		}catch(e){
			next(e)
		}
	}

	async refresh(req,res,next){
		try{
			const {refreshToken} = req.cookies

			const validateData = await tokenService.validateRefreshToken(refreshToken)

			if(!validateData) return next(new UnauthorizedError())

			const user = await userService.getById(validateData.id)

			if(!user) return next(new UnauthorizedError())

			const newUser = {
				id:validateData.id,
				email:validateData.email
			}

			const tokens = await tokenService.generateToken(newUser)

			await tokenService.saveToken(newUser.id,tokens.refreshToken)

			await res.cookie("refreshToken",tokens.refreshToken,{httpOnly:true,maxAge:1000 * 60 * 60*24*30})

			return res.json({
				...newUser,
				accessToken:tokens.accessToken
			})
		}catch(e){
			next(e)
		}		
	}


}

module.exports = new UserController()