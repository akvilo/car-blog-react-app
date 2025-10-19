import './SectionRecommend.scss'

import BlockRecommend from "./BlockRecommend"
import SideBar from "./SideBar/SideBar"
import SectionRecommendMain from "./SectionRecommendMain"

import { cars } from '../../data.js'
import { useState } from "react"

const SectionRecommend = () => {
    const [active, setActive] = useState(1)
    const [userTags, setUserTags] = useState([])

    return(
        <section className="section-recommend">
            <SectionRecommendMain 
            userTags = {userTags}
            active = {active}
            setActive = {setActive}
            >
            {
                cars
                .filter((car, id) => id < active*5 && id > active*5-6)
                .filter((car) => {
                    if(userTags.length > 0) {
                        return userTags.some(cars => Object.values(cars).includes(car.carTag))
                    }
                    else {
                        return true
                    }
                })
                .map((car, id) => (
                    <BlockRecommend
                    key={id}
                    carName={car.name}
                    carDesc={car.desc}
                    carImage={car.image}
                    carInfo={car.infoRecommendation}
                />
            ))}
            </SectionRecommendMain>
            <SideBar 
                userTags = {userTags}
                setUserTags = {setUserTags}
            />
        </section>
    )
}

export default SectionRecommend