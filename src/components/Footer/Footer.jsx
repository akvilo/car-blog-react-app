import Nav from "../Nav/Nav"
import './Footer.scss'

export default function Footer() {
    return (
        <footer>

            <div className="footer__lower">
                <span className="footer__copyright"></span>
                <Nav
                className='footer'
                />
            </div>
        </footer>
    )
}