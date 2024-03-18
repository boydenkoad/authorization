import classNames from 'classnames'

export interface IPostCard{
	id:number,
	title:string,
	date:string,
	tags:string[],
	description:string
}

interface PostCardProps{
	post:IPostCard
	className?:string
}


export function PostCard({post,className}:PostCardProps){
	const {date,description,tags,title} = post

	return <section className={classNames(className,"post-card")}>
		<h2 className="post-card__title">
			{title}
		</h2>
		<div className="post-card__date-and-tags">
			<span className="post-card__date-and-tags__element post-card__date">{date}</span>
			<span className="post-card__date-and-tags__element post-card__tags">{tags}</span>
		</div>
		<p className="post-card__description">
			{description}
		</p>
	</section>
}
