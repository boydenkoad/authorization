import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICounter{
    value:number
}

interface Error{
    value:number
}

interface InitialState{
    value:number
}

const initialState:InitialState = {
	value:0
}


export const counterSlice= createSlice({
	name:'auth',
	initialState,
	reducers:{
        increment(state){
            state.value += 1
        },
        decrement(state){
            state.value -=1
        }
	}
})

export const {increment,decrement} = counterSlice.actions


