import './PopularPosts.scss'
import PopularPost from './PopularPost'
import { cars } from '../../../data.js'

const PopularPosts = () => {
    return (
        <div className="sidebar__popular">
            <h3>Popular Posts</h3>
            <PopularPost 
                carName={cars[1].name}
                carDesc={cars[1].desc}
                carImage={cars[1].image}
            />
            <PopularPost 
                carName={cars[4].name}
                carDesc={cars[4].desc}
                carImage={cars[4].image}
            />
            <PopularPost 
                carName={cars[3].name}
                carDesc={cars[3].desc}
                carImage={cars[3].image}
            />
        </div>
    )
}

export default PopularPosts