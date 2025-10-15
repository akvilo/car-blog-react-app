import BlockRecommend from "./BlockRecommend"
import './SectionRecommend.scss'
import PaginationRecommend from "./PaginationRecommend"
import React from "react"
import { cars } from '../../data.js'

const SectionRecommendMain = ({children, active, setActive, userTags}) => {
    return(
        <div className="section-recommend__main">
            {children}
            <PaginationRecommend 
            userTags = {userTags}
            active = {active}
            setActive = {setActive}
            />   
        </div>
    )
}

export default SectionRecommendMain