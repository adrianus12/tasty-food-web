import './page-galeri.css';

import Navbar from "../components/Navbar";
import Title from "../components/Title";

import img1 from '../assets/gal2.jpg'
import pic9 from '../assets/beritaSide4.jpg'
import pic10 from '../assets/beritaSide2.jpg'

import { EmblaCarousel } from './Carousel';
import useFetch from '../components/useFetch'
import Footer from '../components/Footer';


const Galeri = () => {
    const carouselPics = [img1,pic9,pic10]
    const {error, isPending, data: galleries} = useFetch(process.env.REACT_APP_URLDATA + '/galleries')

    return (  
        <div className="galeri">
            <Navbar className={'Navbar'}/>
            <Title title='GALERI KAMI'/>
            <div className="picSlide">
                <EmblaCarousel images={carouselPics}/>
            </div>
            <div className="picGrid">
                {error && <div>{error}</div>}
                {isPending && <div>Loading....</div>}
                {galleries && galleries.map((galeri)=>(
                        <img src = {galeri.pic} alt=''/> ))
                }
            </div>
            <Footer/>
        </div>
    );
}
 
export default Galeri;