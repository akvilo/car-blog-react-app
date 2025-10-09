import BlockRecommend from "./BlockRecommend"
import SideBar from "./SideBar/SideBar"
import './SectionRecommend.scss'
import React from "react"
import SectionRecommendMain from "./SectionRecommendMain"

import { cars } from '../../data.js'
import { useState } from "react"

export default function SectionRecommend() {
    const [active, setActive] = useState(`1`)

    return(
        <section className="section-recommend">
            <SectionRecommendMain 
            active = {active}
            setActive = {setActive}
            >
            {
                cars
                .filter((car, id) => id < Number(active)*5 && id > Number(active)*5-6)
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
            <SideBar />
        </section>
    )
}