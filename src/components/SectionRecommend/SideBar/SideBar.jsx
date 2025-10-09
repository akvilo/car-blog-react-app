import './SideBar.scss'
import InformationWidget from './InformationWidget'
import PopularPosts from './PopularPosts'

export default function() {
    return(
        <section className="sidebar">
            <InformationWidget />
            <PopularPosts />
        </section>
    )
}