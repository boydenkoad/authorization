import { RecentPosts } from "./components/recent-posts/recent-posts"
import { HomeHeader } from "./components/home-header/home-header"

import './style.css'

const data = {
	title:"Hi, I am John,Creative Technologist",
	desciption:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	avatar:'avatar.png'
}




export default function Home(){
	return <div className="home-page">
		<HomeHeader className="home-page__header" avatar={data.avatar} title={data.title} description={data.desciption}/>
		<RecentPosts className="home-page__recents-posts"/>
	</div>
}