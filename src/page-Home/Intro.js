import { Link } from 'react-router-dom';
import imgHome1 from '../assets/img-4.png';

const Intro = () => {
    return (  
        <div className="Intro">
            <div className="container">
                <img src={imgHome1} alt=''  />
                <div className="border">
                </div>
                <div className="contentIntro">
                    <h1><span>HEALTHY</span></h1>
                    <h1>TASTY FOOD</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, feugiat vel luctus et, tincidunt tincidunt purus. Aenean et nisi at velit malesuada ullamcorper. Sed vel molestie lorem. Vestibulum accumsan purus at sem pharetra mollis. Fusce a pretium mi.</p>
                    <Link to='/tentang'><button className='blackButton'><h4>TENTANG KAMI</h4></button></Link>
                </div>
            </div>
        </div>
    );
}
 
export default Intro;