import Link from 'next/link'
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
		<div className='container'>
			<div className='recent-posts__title__view'>
				<h3 className='recent-posts__title'>Recent posts</h3>
				<Link className="recent-posts__view" href={''}>View all</Link>
			</div>
			<div className='recent-posts__list'>
			{posts.map(post=><PostCard key={post.id}  post={post} className="recent-posts__list__element"/>)}
			</div>
		</div>
	</div>
}
