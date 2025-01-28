import './page-tentang.css';

import Navbar from "../components/Navbar";
import Title from "../components/Title";

import img1 from '../assets/gal1.jpg'
import img2 from '../assets/beritaSide2.jpg'
import img3 from '../assets/beritaUtama.jpg'
import img4 from '../assets/visi-img.jpg'
import img5 from '../assets/beritaSide1.jpg'
import Footer from '../components/Footer';

const Tentang = () => {
    return (  
        <div className="tentang">
            <Navbar className={'Navbar'}/>
            <Title title='TENTANG KAMI'/>
            <div className="tentangContent">
                <div className="tentangContent-text">
                    <h2>TASTY FOOD</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales turpis sed erat laoreet efficitur. Etiam pulvinar, ante id suscipit molestie, lorem quam finibus justo, vitae convallis arcu nisi nec lectus. Fusce in semper elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales turpis sed erat laoreet efficitur. Etiam pulvinar, ante id suscipit molestie, lorem quam finibus justo, vitae convallis arcu nisi nec lectus. Fusce in semper elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p></span>
                </div>
                <div className="tentangContent-img">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="tentangContent2">
                <div className="tentangVisi">
                    <div className="tentangContent-img">
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    <div className="tentangContent-text">
                        <h3>VISI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue eros, efficitur eget sodales nec, feugiat id risus. Integer id lorem porttitor, posuere nulla et, interdum lorem. Cras vitae neque scelerisque, pulvinar nibh a, venenatis lectus. Pellentesque sapien massa, sollicitudin sed lacinia vitae, pretium vel nulla. Nam sagittis odio id sapien vestibulum malesuada. Vestibulum porttitor lacus vitae condimentum iaculis. Nullam pretium consectetur nunc, ac auctor neque convallis vel. Fusce consequat nunc convallis quam dapibus scelerisque. Sed sollicitudin leo eu placerat pulvinar. Nam accumsan malesuada augue non malesuada.</p>
                    </div>
                </div>
                <div className="tentangMisi">
                    <div className="tentangContent-text">
                        <h3>MISI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue eros, efficitur eget sodales nec, feugiat id risus. Integer id lorem porttitor, posuere nulla et, interdum lorem. Cras vitae neque scelerisque, pulvinar nibh a, venenatis lectus. Pellentesque sapien massa, sollicitudin sed lacinia vitae, pretium vel nulla. Nam sagittis odio id sapien vestibulum malesuada. Vestibulum porttitor lacus vitae condimentum iaculis. Nullam pretium consectetur nunc, ac auctor neque convallis vel. Fusce consequat nunc convallis quam dapibus scelerisque. Sed sollicitudin leo eu placerat pulvinar. Nam accumsan malesuada augue non malesuada.</p>
                    </div>
                    <div className="tentangContent-img">
                        <img className='img5' src={img5} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Tentang;