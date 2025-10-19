import './SectionPopular.scss'
import CarCard from '../CarCard/CarCard'

import { cars } from '../../data'
import { useState, useRef, useEffect } from 'react'

const SectionPopular = () => {
    const [activeSlider, setActiveSlider] = useState()
    const informationRef = useRef()

    useEffect(() => {
        if(activeSlider) {
            setTimeout(() => {
                informationRef.current.classList.add('animate')
            }, 250)
        }
    })

    function handleClickOnSlider(id) {
        if (activeSlider === id) {
            setActiveSlider()
            
        }
        else {
            setActiveSlider(id)
        }
    }

    return (
        <section className="section-popular">
            <div className="section-popular__main">
                <h2 className="section-popular__title">Most popular</h2>
                <div className="section-popular__slider">
                {
                    cars
                    .filter((card, id) => id<4)
                    .map((car, id) => (
                        <CarCard 
                            className='slider'
                            active = {activeSlider === id ? 'active' : ''}
                            informationRef = {informationRef}
                            key={id}
                            carName={car.name}
                            carDesc={car.desc}
                            carImage={car.image}
                            carInfo={activeSlider === id ? car.infoRecommendation : null}
                            height='300px'
                            onClick={() => handleClickOnSlider(id)}
                        />
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default SectionPopular