import axios from "axios"

const initi = axios.create({
	baseURL:"http://localhost:4000",
	headers:{
		"Content-Type":"application/json"
	}
})

export const Api = {
	async registration(user:any){
		const result = initi.post('/registration',user)
		return result

	}
}