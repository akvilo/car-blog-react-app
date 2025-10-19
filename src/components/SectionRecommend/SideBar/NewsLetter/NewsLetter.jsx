import './NewsLetter.scss'
import Button from "@/components/Button/Button"

const NewsLetter = () => {
    return (
        <div className="sidebar__newsletter">
            <h3>Email newsletter</h3>
            <span className="sidebar__newslatter-description">Sign up to receive email updates and to hear what's going on.</span>
            <form className="sidebar__newsletter-data">
                <label htmlFor="inputNameField" className="sr-only">Your name</label>
                <input 
                    id="inputNameField"
                    className="sidebar__newslatter-input"
                    type="text" 
                    placeholder="Your name"
                    name="user-name"
                    required
                />
                <label htmlFor="inputEmailField" className="sr-only">Your email</label>
                <input 
                    id="inputEmailField"
                    className="sidebar__newslatter-input"
                    type="email"
                    placeholder="Your email adress" 
                    name="user-email"
                    required
                />
                <Button
                className = "sidebar__newslatter-subscribe"
                type="submit"
                >Subscribe to newsletter
                </Button>
            </form>
        </div>
    )
}

export default NewsLetter