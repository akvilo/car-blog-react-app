import { useState } from 'react'
import './BlockHero.scss'

export default function BlockHero({width, height, carName, carDesc, carImage}) {
    const [blockState, setBlockState] = useState('')
    function handleHover() {
        setBlockState('active')
    }
    function handleMouseLeave() {
        setBlockState('')
    }
    return(
        <div 
        className={`block-hero ${blockState}`}
        style={{width: `${width}px`, height: `${height}px`, backgroundImage: `url(${carImage})`}}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        >
            <span className='hero__category vehicle-category'>Vehicle</span>
            <div className="hero__information">
                <span className="hero__information-name">{carName}</span>
                <span className="hero__information-description">{carDesc}</span>
            </div>
        </div>
    )
}