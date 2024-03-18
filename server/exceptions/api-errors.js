class ApiError extends Error{
	constructor(status,message){
		super()
		this.message = message
		this.status = status
	}
}


class UnauthorizedError extends ApiError{
	constructor(){
		super(401,"Пользователь не авторизован")
	}
}

class BadRequestError extends ApiError{
	constructor(message,errors =[]){
		super(400,message)
		this.errors = errors
	}
}


module.exports = {
	ApiError, BadRequestError, UnauthorizedError
}