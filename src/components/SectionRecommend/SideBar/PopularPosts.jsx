import './PopularPosts.scss'
import PopularPost from './PopularPost'
import { cars } from '../../../data.js'

export default function PopularPosts() {
    return (
        <div className="sidebar__popular">
            <h3>Popular Posts</h3>
            <PopularPost 
                carName={cars[1].name}
                carDesc={cars[1].desc}
                carImage={cars[1].image}
            />
        </div>
    )
}