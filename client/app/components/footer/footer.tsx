'use client'

import Image from 'next/image'
import classNames from "classnames"

import './style.css'
import { useAppSelector } from '@/lib/hooks'


interface FooterProps{
	className?:string,
}


export function Footer({className}:FooterProps){
	
	const {id} = useAppSelector(state=>state.authReducer)
	
	if(!id) return <></>

	return <footer className={classNames(className,"footer")}>
		<div className='footer__icons'>
			<Image height={30} width={30} src="fb.svg" alt='Follow me on Facebook'/>
			<Image height={30} width={30} src="insta.svg" alt='Follow me on Instagram'/>
			<Image height={30} width={30} src="twitter.svg" alt='Follow me on Twitter'/>
			<Image height={30} width={30} src="linkedin.svg" alt='Follow me on Linkedin'/>
		</div>
		<span>Copyright ©2020 All rights reserved</span>
	</footer>
}
