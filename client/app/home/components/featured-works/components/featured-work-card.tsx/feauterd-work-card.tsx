import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import './style.css'

export interface IFeaturedWorkCard{
    id:number,
    image:StaticImageData,
    title:string,
    tag:string,
    description:string
    data:number
}

interface FeaturedWorkCardProps{
    featuredWorkCard:IFeaturedWorkCard,
    className?:string
}



export function FeaturedWorkCard({featuredWorkCard,className}:FeaturedWorkCardProps){

    const {data,description,id,image,tag,title} = featuredWorkCard

    return <section className={classNames(className,"featured-work-card")}>
        <div className="featured-work-card__left-column">
            <Image className='featured-work-card__image' priority src={image} height={240} width={246} alt={`Image for ${title}`}/>
        </div>
        <div className="featured-work-card__right-column">
            <h2 className='featured-work-card__title'>
                {title}
            </h2>
            <div className='featured-work-card__date-and-tag'>
                <span className='featured-work-card__date'>{data}</span>
                <span className='featured-work-card__tag'>{tag}</span>
            </div>
            <p className='featured-work-card__description'>
                {description}
            </p>
        </div>
    </section>
}