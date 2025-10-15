import './Tags.scss'
import Tag from './Tag'


const TagsBurger = (props) => {
    const {
        burgerRef,
        setUserTags,
        setListTags,
        listTags,
        listBurgerIsActive,
    } = props

    function handleClickOnListTag(item) {
        setUserTags(prev => [...prev, item])
        setListTags(listTags.filter((listTag) => listTag.carTag !== item.carTag))
    }

    function renderListTags() {
        return listTags.map((item, index) => {
            return  <Tag key = {index} tag = {item.carTag} onClick = {() => handleClickOnListTag(item)}/>
        })
    }
    return (
        <div ref={burgerRef} className={`tags__burger ${listBurgerIsActive ? 'active' : ''}`}>
            {renderListTags()}
        </div>
    )
}

export default TagsBurger