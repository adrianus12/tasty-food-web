import './page-berita.css'
// import '../page-Home/page-home.css'

import Navbar from "../components/Navbar"
import Title from "../components/Title"
import BoxBerita from '../components/BoxBerita'
import useFetch from '../components/useFetch'

import image1 from '../assets/gal3.jpg'
import Footer from '../components/Footer'

const Berita = () => {
    const {error, isPending, data: news} = useFetch('http://localhost:8000/news')

    return (  
        <div className="berita">
            <Navbar className={'Navbar'}/>
            <Title title='BERITA KAMI'/>
            <div className="beritaIntro">
                <img src={image1} alt="" />
                <div className="beritaIntro-text">
                    <h2>APA SAJA MAKANAN KHAS NUSANTARA?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales turpis sed erat laoreet efficitur. Etiam pulvinar, ante id suscipit molestie, lorem quam finibus justo, vitae convallis arcu nisi nec lectus. Fusce in semper elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales turpis sed erat laoreet efficitur. Etiam pulvinar, ante id suscipit molestie, lorem quam finibus justo, vitae convallis arcu nisi nec lectus. Fusce in semper elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                    </p>
                    <button className='blackButton'><h4>BACA SELENGKAPNYA</h4></button>
                </div>
            </div> 
            <div className="beritaLain">
                <h2>BERITA LAINNYA</h2>
                <div className="beritaLain-content">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading....</div>}
                    {news && news.map((berita)=>(
                         <BoxBerita image={berita.pic} title={berita.title} content={berita.body} id={berita.id}/>))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Berita;