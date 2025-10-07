import BlockRecommend from "./BlockRecommend"
import './SectionRecommend.scss'
import PaginationRecommend from "./PaginationRecommend"
import React from "react"
import { cars } from '../../data.js'

export default function SectionRecommendMain({children, active, setActive}) {
    return(
        <div className="section-recommend__main">
            {children}
            <PaginationRecommend 
            active = {active}
            setActive = {setActive}
            />   
        </div>
    )
}