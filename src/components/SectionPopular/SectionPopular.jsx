import './SectionPopular.scss'
import CarCard from '../CarCard/CarCard'

import { cars } from '../../data'
import { useState, useRef, useEffect } from 'react'
import useSlider from '@/hooks/useSlider'


const SectionPopular = () => {
    const [activeSlider, setActiveSlider] = useState()
    const [firstCard, setFirstCard] = useState(0)
    const { nextCard, prevCard } = useSlider(setFirstCard, firstCard)   
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
                    .filter((card, id) => id >= firstCard && id < firstCard+4)
                    .map((car, id) => (
                        <CarCard 
                            className='slider'
                            active = {activeSlider === id ? 'active' : ''}
                            informationRef = {informationRef}
                            firstCard = {id === 0 && id <1? true : null}
                            firstCardOnClick = {prevCard}
                            lastCard = {id === 3 ? true : null}
                            lastCardOnClick = {nextCard}
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