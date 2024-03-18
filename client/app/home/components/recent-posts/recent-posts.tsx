import classNames from 'classnames'
import {PostCard,IPostCard} from "./components/post-card/post-card"
import './style.css'



interface RecentPostsProps{
	className?:string
}

const posts:IPostCard[]=[

	{id:1,date:"12 Feb 2020",
	description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	tags:["Design","Pattern"],
	title:"Making a design system from scratch"},
	{id:2,date:"12 Feb 2020",
	description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
	tags:["Figma", "Icon Design"],
	title:"Creating pixel perfect icons in Figma"},
]


export function RecentPosts({className}:RecentPostsProps){
	return <div className={classNames(className,"recent-posts")}>
		{posts.map(post=><PostCard  post={post} className="recent-posts__post"/>)}
	</div>
}
