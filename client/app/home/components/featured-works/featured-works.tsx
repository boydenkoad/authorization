import classNames from 'classnames'
import image1 from './components/images/Rectangle 30.png'
import image2 from './components/images/Rectangle 32.png'
import image3 from './components/images/Rectangle 34.png'

import './style.css'
import { FeaturedWorkCard, IFeaturedWorkCard } from './components/featured-work-card.tsx/feauterd-work-card'


interface FeaturedWorksProps{
    className?:string
}

const data:IFeaturedWorkCard[] = [
    {
        id:1,
        data:2020,
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        image:image1,
        tag:"Dashboard",
        title:'Designing Dashboards'
    },
    {
        id:2,
        data:2018,
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        image:image2,
        tag:"Illustration",
        title:'Vibrant Portraits of 2020'
    },
    {
        id:3,
        data:2018,
        description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        image:image3,
        tag:"Typography",
        title:'36 Days of Malayalam type'
    },

]

export function FeaturedWorks({className}:FeaturedWorksProps){
    return <div className={classNames(className,"featured-works")}>
        <div className='container'>
            <h2 className='featured-works__title'>
                Featured works
            </h2>
            {data.map((card)=><FeaturedWorkCard key={card.id} featuredWorkCard={card} className='featured-works__featured-works-card'/>)}
        </div>
    </div>
}