const jwt = require("jsonwebtoken")

const env = require("dotenv")
const { UnauthorizedError } = require("../exceptions/api-errors")
env.config()

const accessKey = process.env.JWT_ACCESS_SECRET_KEY
const refreshKey = process.env.JWT_REFRESH_SECRET_KEY

let tokens = []

class TokenService{

	async generateToken(user){

		const accessToken = jwt.sign(user,accessKey,{expiresIn:'1m'})

		const refreshToken = jwt.sign(user,refreshKey,{expiresIn:'2m'})
		
		return {
			accessToken,refreshToken
		}
	}

	async validateAccessToken(accessToken){

		try{
			const user = jwt.verify(accessToken,accessKey)
			
			if(!user) return null

			return user
		
		}
		catch(e){
			
			throw new UnauthorizedError()
		}	

	
		

	}

	async validateRefreshToken(refreshToken){

		const isTokenExist = tokens.find(el=>el.refreshToken === refreshToken)

		if(!isTokenExist) throw (new UnauthorizedError())

		const user = jwt.verify(refreshToken,refreshKey)

		if(!user) return null

		return user
	}

	async saveToken(userId,refreshToken){
		const token = tokens.find(el=>el.userId === userId)

		if(!token){
			tokens.push({
				userId,
				refreshToken
			})
		}else{
			token.refreshToken = refreshToken
		}
	}

	async deleteToken(token){
		const isExist = await this.findToken(token)

		if(!isExist) throw new Error('Пользователь не авторизован')

		tokens = tokens.filter(token=>token.refreshToken !== token)
	}

	async getAll(req,res,next){
		return res.json(tokens)
	}
}

module.exports = new TokenService()