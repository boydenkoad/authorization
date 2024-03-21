import axios from "axios"
import { IUser } from "./types/user"

const instance  = axios.create({
	baseURL:"http://localhost:4000",
	headers:{
		"Content-Type":"application/json"
	}
})

export const Api = {
	async registration(user:IUser){
		const result = instance.post('/registration',user)
		return result
	},

	async authorization(user:IUser){
		const result = instance.post('/login',user)
		return result
	}
}