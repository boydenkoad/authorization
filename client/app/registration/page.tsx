"use client"
import {useState} from "react"
import {Api} from '@/api/api'
import './style.css'
import Link from "next/link"
export default function Page(){
	
	const [form,setForm] = useState({email:'',password:''})
	const [successMessage,setSuccessMessage] = useState<string>('')
	const [error,setError] = useState<any>({message:''})

	function onChangeHandler(ev:React.ChangeEvent<HTMLInputElement>){
		setForm(prev=>({...prev,[ev.target.name]:ev.target.value}))
	}

	async function onSubmit(ev:React.FormEvent){
		ev.preventDefault()
	    await Api.registration(form).then(res=>{
			setSuccessMessage(res.data.message)
			setError({message:''})
		}).catch(err=>setError(err.response.data))
	}

	return <div className="registration-page">
		<form className="form" onSubmit={onSubmit}>
			<div className="form__title">Registration</div>
			<div className="form__input-block">
				<label htmlFor="email">Email</label>
				<input name="email" value={form.email} onChange={onChangeHandler} type="text"/>
			</div>
			<div className="form__input-block">
				<label htmlFor="password">Password</label>
				<input name="password" value={form.password} onChange={onChangeHandler} type="password"/>
			</div>
			{successMessage && <div style={{color:'green',textAlign:'center',marginBottom:10}}>{error.message}</div>}
			{
				!error.message.length ? null : <div style={{color:'red',textAlign:'center',marginBottom:10}}>{error.message}</div> 
			}
			<div className="form__buttons">
				<button>Sing Up</button>
			</div>
			<Link style={{}} href={'/auth'}>Authorization</Link>
		</form>
	</div>
	
}