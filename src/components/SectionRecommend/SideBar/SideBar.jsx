import './SideBar.scss'
import InformationWidget from './InformationWidget'
import PopularPosts from './PopularPosts'
import Tags from './Tags/Tags'

const SideBar = (props) => {
    const {
        userTags,
        setUserTags
     } = props

    return(
        <section className="sidebar">
            <InformationWidget />
            <PopularPosts />
            <Tags 
            userTags = {userTags}
            setUserTags = {setUserTags}
            />
        </section>
    )
}

export default SideBar