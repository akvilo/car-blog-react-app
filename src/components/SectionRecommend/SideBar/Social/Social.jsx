 import './Social.scss'
 import Button from '@/components/Button/Button'
 import instagram1 from '@/assets/instagram/instagram1.jpg'
 import instagram2 from '@/assets/instagram/instagram2.jpg'
 import instagram3 from '@/assets/instagram/instagram3.jpg'
 import instagram4 from '@/assets/instagram/instagram4.jpg'
 import instagram5 from '@/assets/instagram/instagram5.jpg'
 import instagram6 from '@/assets/instagram/instagram6.jpg'

 const images = [instagram1, instagram2, instagram3, instagram4, instagram5, instagram6]
 const Social = () => {
    return (
        <div className="sidebar__social">
            <h2 className="sidebar__social-title">Instagram</h2>
            <div className="sidebar__social-collage">
                {images.map((image) => {
                    return (
                        <a key ={image} href='https://www.instagram.com/akviloq/' target='_blank'>
                            <img src = {image} className='social-collage_image' alt = "instagram image"></img>
                        </a>
                    )
                    })}
            </div>
            <Button 
            className="sidebar__social-button" 
            height="50px" width="100%" 
            onClick={() => window.open('https://www.instagram.com/akviloq/')}
            >View Instagram</Button>
        </div>
    )
 }

 export default Social