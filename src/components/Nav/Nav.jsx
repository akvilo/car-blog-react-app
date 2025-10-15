import './Nav.scss';

const Nav = ({className}) => {
    return(
    <nav className= {`nav ${className}__nav`}>
        <ul className='nav-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Recipes</li>
            <li className='nav-item'>Article</li>
            <li className='nav-item'>Contact</li>
            <li className='nav-item'>Purchase</li>
        </ul>
    </nav>
    )
}

export default Nav
