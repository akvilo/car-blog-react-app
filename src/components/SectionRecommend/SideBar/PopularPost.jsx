import './PopularPosts.scss'
import Category from '@/components/Category'

const  PopularPost = ({carName, carDesc, carImage}) => {
    return (
        <div className="popular-post">
            <div className="popular-post__main">
                <img 
                className='popular-post__main-image'
                src={carImage} 
                alt="popular post image" 
                />
                <Category className="popular-post__category">Vehicle</Category>
            </div>
            <span className="popular-post__description">{carDesc}</span>
            <span className="popular-post__author">{carName}</span>
        </div>
    )
}

export default PopularPost