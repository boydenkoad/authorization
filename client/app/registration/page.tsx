"use client"
import { InputHTMLAttributes, useState} from "react"
import {Api} from '@/api/api'
import './style.css'
export default function Page(){
	
	const [form,setForm] = useState({email:'',password:''})
	const [error,setError] = useState()

	function onChangeHandler(ev:React.ChangeEvent<HTMLInputElement>){
		setForm(prev=>({...prev,[ev.target.name]:ev.target.value}))
	}

	async function onSubmit(ev:React.FormEvent){
		ev.preventDefault()

	    const res = await Api.registration(form).then(res=>console.log('success')).catch(err=>setError)
	}

	return <div className="registration-page">
		<form className="form" onSubmit={onSubmit}>
			<div className="form__title">Registrantion</div>
			<div className="form__input-block">
				<label htmlFor="email">Email</label>
				<input name="email" value={form.email} onChange={onChangeHandler} type="text"/>
			</div>
			<div className="form__input-block">
				<label htmlFor="password">Password</label>
				<input name="password" value={form.password} onChange={onChangeHandler} type="password"/>
			</div>
			{
				
			}
			<div className="form__buttons">
				<button>Sing Up</button>
			</div>
		</form>
	</div>
	
}