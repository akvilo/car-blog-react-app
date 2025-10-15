import './Header.scss';
import search from '../../assets/search.png';
import Nav from '../Nav/Nav';

const Header = () => {
    return(
        <header>
            <a 
            href="/" 
            className='header__logo'
            aria-label='return__button'
            >
                <span className='header__logo-title'>Premium</span>
                <span className='header__logo-subtitle'>CAR</span>
            </a>
            <Nav 
            className='header'
            />
            <button 
            className='header__search-button'
            aria-label='search__button'
            >
                <img 
                src={search} 
                alt="Search"
                />
            </button>
        </header>
    )
}

export default Header