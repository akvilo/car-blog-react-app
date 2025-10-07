import './Header.scss';
import search from '../../assets/search.png';
import Nav from '../Nav/Nav';

export default function Header() {
    return(
        <header>
            <a href="/" className='header__logo'>
                <span className='header__logo-title'>Premium</span>
                <span className='header__logo-subtitle'>CAR</span>
            </a>
            <Nav 
            className='header'
            />
            <button className='header__search-button'>
                <img 
                src={search} 
                alt="Search" 
                />
            </button>
        </header>
    )
}