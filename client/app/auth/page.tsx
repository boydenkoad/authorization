"use client"
import {Api} from '@/api/api'
import { useAppSelector ,useAppDispatch} from "@/lib/hooks"
import {authorization} from '@/lib/features/auth/auth'
import { useState } from "react"

import './style.css'
import { useRouter } from 'next/navigation'

export default function Page(){
	const {id} = useAppSelector(state=>state.authReducer)
	const dispatch = useAppDispatch()
	const {push} = useRouter()

	if(id){
		push('/')
	}
	
	const [form,setForm] = useState({email:'',password:''})
	const [error,setError] = useState<any>()

	function onChangeHandler(ev:React.ChangeEvent<HTMLInputElement>){
		setForm(prev=>({...prev,[ev.target.name]:ev.target.value}))
	}

	function onSubmit(ev:React.FormEvent){
		ev.preventDefault()
		Api.authorization(form).then(res=>dispatch(authorization(res.data))).catch(err=>setError(err.response.data))
	} 

	
	return <div className="auth-page">
		<form className="form" onSubmit={onSubmit}>
			<div className="form__title">Authorization</div>
			<div className="form__input-block">
				<label htmlFor="email">Email</label>
				<input name="email" value={form.email} onChange={onChangeHandler} type="text"/>
			</div>
			<div className="form__input-block">
				<label htmlFor="password">Password</label>
				<input name="password" value={form.password} onChange={onChangeHandler} type="password"/>
			</div>
			{error && <div style={{color:'red',marginBottom:10,textAlign:'center'}}>{error.message}</div>}
			<div className="form__buttons">
				<button>Sing In</button>
			</div>
		</form>
	</div>
}