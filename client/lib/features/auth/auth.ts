import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IUser{
	id:number,
	email:string,
	accessToken:string
}

interface InitialState{
	id:number | null,
	email:string | null,
	accessToken: string | null
}

const initialState:InitialState = {
	id:null, 
	email:null,
	accessToken:null
}


export const authSlice= createSlice({
	name:'auth',
	initialState,
	reducers:{
		authorization:(state,action:PayloadAction<IUser>)=>{
			state.id = action.payload.id
			state.email = action.payload.email
			state.accessToken = action.payload.accessToken
		},
	}
})

export const {authorization} = authSlice.actions

