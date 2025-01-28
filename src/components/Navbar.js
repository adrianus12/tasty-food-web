import { Link } from 'react-router-dom';

const Navbar = ({className}) => {
    return (  
        <div className={className}>
            <h2>TASTY FOOD</h2>
            <div className="nav">
                <Link to='/' className='link'><h4>HOME</h4></Link>
                <Link to='/tentang' className='link'><h4>TENTANG</h4></Link>
                <Link to='/berita' className='link'><h4>BERITA</h4></Link>
                <Link to='/galeri' className='link'><h4>GALERI</h4></Link>
                <Link to='/kontak' className='link'><h4>KONTAK</h4></Link>
            </div>
        </div>
    );
}
 
export default Navbar;