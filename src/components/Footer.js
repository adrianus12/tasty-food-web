import fb from '../assets/001-facebook.png'
import tw from '../assets/002-twitter.png'
import icon1 from '../assets/ic_markunread_24px.png'
import icon2 from '../assets/ic_call_24px.png'
import icon3 from '../assets/ic_place_24px.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Footer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (  
        <div className="footer">
            <div className="footerContent">
                <div className="fot1">
                    <h2>Tasty Food</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, feugiat vel luctus et, tincidunt tincidunt purus. Aenean et nisi at velit malesuada ullamcorper. Sed vel molestie lorem. Vestibulum accumsan purus at sem pharetra mollis. Fusce a pretium mi.</p>
                    
                </div>
                <div className="fot2">
                    <h3>Useful Links</h3>
                    <p>Blog</p>
                    <Link to='/galeri' className='link'><p>Galeri</p></Link>
                    <p>Testimonial</p>
                    <Link to="/login" className='link'><p>Admin</p></Link>
                </div>
                <div className="fot3">
                    <h3>Privacy</h3>
                    <p>Karir</p>
                    <Link to='/tentang' className='link'><p>Tentang Kami</p></Link>
                    <Link to='/kontak' className='link'><p>Kontak Kami</p></Link>
                    <p>Servis</p>
                </div>
                <div className="fot4">
                    <h3>Contact Info</h3>
                    <span><img src={icon1} alt="" /><p>tastyfood@gmail.com</p></span>
                    <span><img src={icon2} alt="" /><p>+62 800 6000 7000</p></span>
                    <span><img src={icon3} alt="" /><p>Kota Bandung, Jawa Barat</p></span>
                </div>
            </div>
            <span>
                <img src={fb} alt="" />
                <img src={tw} alt="" />            
            </span>
        </div>
        
    );
}
 
export default Footer;