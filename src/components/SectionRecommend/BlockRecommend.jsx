import './BlockRecommend.scss'

export default function BlockRecommend({carName, carDesc, carImage, carInfo}) {

        
    return (
        <div 
        className="block-recommendation"
        style={{backgroundImage: `url(${carImage})`}}
        >
            <div className="block-recommendation__description">
                <span className="block_recommendation__description-category">Vehicle</span>
                <span className="block-recommendation__description-name">{carDesc}</span>
                <span className="block-recommendation__description-company">{carName}</span>
                <p className="block-recommendation__description-info">{carInfo}</p>
            </div>
        </div>
    )
}