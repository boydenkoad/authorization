"use client"
import Link from "next/link"
import classNames from "classnames"
import './style.css'
import { useAppSelector } from "@/lib/hooks"

interface HeaderProps{
	className?:string
}

export function Header ({className}:HeaderProps){

	const {value} = useAppSelector(state=>state.authReducer)

	if(value === 0) return <></>

	return <header className={classNames(className,"header")}>
		<nav className="header__navigate">
			<ul className="header__navigate-list">
				<li>
					<Link className="header__navigate-link" href={''}>Work</Link>
				</li>
				<li>
					<Link className="header__navigate-link" href={''}>Blog</Link>
				</li>
				<li>
					<Link className="header__navigate-link" href={''}>Contact</Link>
				</li>
			</ul>
		</nav>
	</header>
}
