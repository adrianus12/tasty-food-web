import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Berita from "./Berita";
import Gallery from "./Gallery";
import Intro from "./Intro";
import Tentang from "./Tentang";
import './page-home.css';

const Home = () => {
    return (  
        <div className="Home">
            <Navbar className={'NavbarHome'}/>
            <Intro/>
            <Tentang/>
            <Berita/>
            <Gallery/>
            <Footer/>
        </div>
    );
}
 
export default Home;