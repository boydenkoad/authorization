import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IUser{
	id:number,
	email:string,
	accessToken:string
}

interface Error{

}

interface InitiaState{
	id:number | null,
	email:string | null,
	accessToken: string | null
}

const initialState:InitiaState = {
	id:null, 
	email:null,
	accessToken:null
}


export const authSlice= createSlice({
	name:'auth',
	initialState,
	reducers:{
		authorizate:(state,action:PayloadAction<IUser>)=>{
			try{
				
			}catch(e){

			}
		}
	}
})

export const {authorizate} = authSlice.actions

