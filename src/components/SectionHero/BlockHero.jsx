import './BlockHero.scss'
import Category from '../Category'

import { useState } from 'react'


const BlockHero = ({width, height, carName, carDesc, carImage}) => {
    const [blockState, setBlockState] = useState(null)
    function handleHover() {
        setBlockState('active')
    }
    function handleMouseLeave() {
        setBlockState('')
    }
    return(
        <div 
        className={`block-hero ${blockState === null ? "" : blockState}`}
        style={{width: `${width}px`, height: `${height}px`, backgroundImage: `url(${carImage})`}}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        >
        <Category className="hero__category">Vehicle</Category>
            <div className="hero__information">
                <span className="hero__information-name">{carName}</span>
                <span className="hero__information-description">{carDesc}</span>
            </div>
        </div>
    )
}

export default BlockHero