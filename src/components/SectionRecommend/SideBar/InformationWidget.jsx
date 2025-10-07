import './InformationWidget.scss'
import LeonHunt from '../../../assets/person/LeonHunt.jpg';

export default function InformationWidget() {
    return (
        <div className="sidebar__information">
            <img 
            src={LeonHunt}
            alt="Main Photo" 
            className="sidebar__information-image" 
            />
            <span className="sidebar__information-name">Leon Hunt</span>
            <span className="sidebar__information-about">Food & cooking bloger</span>
            <p className="sidebar__information-description">
                Hi, I'm Leon. 
                Cooking is the way I express my creative side to the world. 
                Welcome to my Kitchen Corner on…
            </p>
            <button className="sidebar__information-continue">Continue Reading</button>
        </div>
    )
}