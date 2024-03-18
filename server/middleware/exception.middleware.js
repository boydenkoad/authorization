const { ApiError,BadRequestError } = require("../exceptions/api-errors")

module.exports = async function (err,req,res,next) {
	if(err instanceof ApiError){
		return res.status(err.status).json(err)
	}
	console.log(err)
	return res.status(500).json({message:"Неизвестная ошибка"})
}
