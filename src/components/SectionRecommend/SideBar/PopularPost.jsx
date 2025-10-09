import './PopularPosts.scss'
import Category from '@/components/Category'

export default function PopularPost({carName, carDesc, carImage}) {
    return (
        <div className="popular-post">
            <Category className="popular-post__category">Vehicle</Category>
            <img 
            className='popular-post__image'
            src={carImage} 
            alt="popular post image" 
            />  
            <span className="popular-post__description">{carDesc}</span>
            <span className="popular-post__author">{carName}</span>
        </div>
    )
}