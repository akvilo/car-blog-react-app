import './PopularPosts.scss'
import CarCard from '@/components/CarCard/CarCard'

import { cars } from '../../../data.js'

const PopularPosts = () => {
    return (
        <div className="sidebar__popular">
            <h3>Popular Posts</h3>
            <CarCard 
                className="popular"
                carName={cars[1].name}
                carDesc={cars[1].desc}
                carImage={cars[1].image}
                height='300px'
            />
            <CarCard 
                className="popular"
                carName={cars[4].name}
                carDesc={cars[4].desc}
                carImage={cars[4].image}
                height='300px'
            />
            <CarCard 
                className="popular"
                carName={cars[3].name}
                carDesc={cars[3].desc}
                carImage={cars[3].image}
                height='300px'
            />
        </div>
    )
}

export default PopularPosts