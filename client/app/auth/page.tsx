"use client"

import { useAppSelector ,useAppDispatch} from "@/lib/hooks"
import {decrement,increment} from "@/lib/features/auth/auth"


export default function Page(){
	const {value} = useAppSelector(state=>state.authReducer)
	const dispatch = useAppDispatch()

	return <div>
		<div>{value}</div>
		<button onClick={()=>{
			console.log("increment")
			dispatch(increment())
		}}>increment</button>
		<button onClick={()=>{
			console.log("decrement")
			dispatch(decrement())
		}}>decrement</button>
	</div>
}