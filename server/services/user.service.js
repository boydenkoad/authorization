const bcrypt  = require("bcrypt")
const tokenService = require("./token.service")
const { ApiError, BadRequestError,UnauthorizedError} = require("../exceptions/api-errors")


let users = []
const salt = 5
let userId = 0

class UserService{

	async registration(email,password){

		const user = users.find(user=>user.email === email)

		if(user) throw new BadRequestError("Email уже используется.")

		const hash = await bcrypt.hash(password,salt)

		userId +=1

		const newUser = {id:userId,
			email,
			password:hash}

		users.push(newUser)

		return newUser
	}

	async getById(id){
		const user = users.find(user=>user.id === id)
		return user
	}

	async login(email,pass){

		const user = users.find(user=>user.email === email)

		if(!user) throw new BadRequestError("Неверный логин или пароль")

		const isCorrectPass = await bcrypt.compare(pass,user.password)

		if(!isCorrectPass) throw new BadRequestError("Неверный логин или пароль")

		const {password,...userDto} = user

		const tokens = await tokenService.generateToken(userDto)

		await tokenService.saveToken(userDto.id,tokens.refreshToken)

		return {
			user:userDto,
			...tokens
		}
	}

	async logout(token){
		await tokenService.deleteToken(token)
	}

	async getAll(){
		return users	
	}
}



module.exports = new UserService()