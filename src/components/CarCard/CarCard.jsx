import './CarCard.scss'
import Category from '../Category'

const CarCard = (props) => {
    const {
        className,
        onClick,
        active,
        carName,
        carDesc,
        carInfo,
        carImage,
        informationRef,
        firstCard,
        firstCardOnClick,
        lastCard,
        lastCardOnClick,
        width,
        height,
     } = props

     return (
            <div className={`car-card ${className}__car-card ${active}`} style={{width: width, height: height}}>
                <div  className="car-card__main">
                    <img 
                    className='car-card__main-image'
                    src={carImage} 
                    alt="car card image" 
                    onClick={onClick}
                    />
                    <Category className="car-card__category">Vehicle</Category>
                    {lastCard ? <button onClick = {lastCardOnClick} className = "last-car-card__button">{`>`}</button> : null}
                    {firstCard ? <button onClick = {firstCardOnClick} className = "first-car-card__button">{`<`}</button> : null}
                </div>
                <span className="car-card__description" onClick={onClick}>{carDesc}</span>
                {carInfo ? <span ref = {informationRef} className="car-card__information">{carInfo}</span> : null}
                <span className="car-card__author">{carName}</span>
            </div>
    )
}

export default CarCard