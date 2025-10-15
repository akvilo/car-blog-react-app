import './Tags.scss'
import Button from '@/components/Button/Button'
import TagsBurger from './TagsBurger'
import Tag from './Tag'

import { useState, useRef } from 'react'
import { carTags, cars } from '@/data'

const Tags = (props) => {
    const {
        userTags,
        setUserTags
    } = props

    const [listTags, setListTags] = useState([...carTags])
    const [listBurgerIsActive, setListBurgerIsActive] = useState(false)

    const burgerRef = useRef()

    function handleClickChooseTags() {
        {listBurgerIsActive ? disableListBurger() : setListBurgerIsActive(true)}
        console.log(cars)
        console.log(userTags)

        function disableListBurger() {
            const burgerMenu = burgerRef.current
            burgerMenu.classList.add('animate')
            setTimeout(() => {
                burgerMenu.classList.remove('animate')
                setListBurgerIsActive(false)
            }, 290);
        }
    }

    function handleClickOnUserTag(item) {
        setListTags(prev => [...prev, item])
        setUserTags(userTags.filter((userTag) => userTag.carTag !== item.carTag))
    }

    function renderUserListTags() {
        return userTags.map((item, index) => {
            return <Tag key = {index} tag = {item.carTag} onClick = {() => handleClickOnUserTag(item)}/>
        })
    }
    
    return (
        <div className="sidebar__tags">
            <h3>Tags</h3>
            <div className="sidebar__tags-items">
                {renderUserListTags()}
            </div>
            <Button
                className="sidebar__tags-choose"
                width="100%"
                onClick = {handleClickChooseTags}
            >Choose tags
            </Button>
            { listBurgerIsActive ? <TagsBurger
                burgerRef = {burgerRef} 
                setUserTags = {setUserTags}
                setListTags = {setListTags}
                listBurgerIsActive = {listBurgerIsActive}
                listTags = {listTags}
            ></TagsBurger>
            : ''
            }
        </div>
    )
}

export default Tags