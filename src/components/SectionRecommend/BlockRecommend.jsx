import './BlockRecommend.scss'
import Category from '../Category'

export default function BlockRecommend({carName, carDesc, carImage, carInfo}) {

        
    return (
        <div 
        className="block-recommendation"
        style={{backgroundImage: `url(${carImage})`}}
        >
            <div className="block-recommendation__description">
                <Category className="block_recommendation__description-category">Vehicle</Category>
                <span className="block-recommendation__description-name">{carDesc}</span>
                <span className="block-recommendation__description-company">{carName}</span>
                <p className="block-recommendation__description-info">{carInfo}</p>
            </div>
        </div>
    )
}