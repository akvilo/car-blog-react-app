import './SideBar.scss'

import InformationWidget from './InformationWidget'
import PopularPosts from './PopularPosts'
import Tags from './Tags/Tags'
import NewsLetter from './NewsLetter/NewsLetter'
import Social from './Social/Social'

const SideBar = (props) => {
    const {
        userTags,
        setUserTags
     } = props

    return(
        <section className="sidebar">
            <InformationWidget />
            <PopularPosts />
            <Social />
            <Tags 
            userTags = {userTags}
            setUserTags = {setUserTags}
            />
            <NewsLetter />
        </section>
    )
}

export default SideBar