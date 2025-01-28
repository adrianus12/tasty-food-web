import { useState } from 'react'
import useFetch from '../components/useFetch'

const Gallery = () => {
    const {error, isPending, data: galleries} = useFetch(process.env.REACT_APP_URLDATA + '/galleries')
    const [count,setCount] = useState(6)

    return (  
        <div className="gallery">
            <h2>GALERI KAMI</h2>
            <div className="contentGallery">
                {error && <div>{error}</div>}
                {isPending && <div>Loading....</div>}
                {galleries && galleries.slice(0,count).map((galeri)=>(
                        <img src = {galeri.pic} alt=''/> ))
                }
            </div>
            {
                count<galleries?.length && <button className='blackButton' onClick={()=>setCount((prevCount)=>prevCount+6)}><h4>LIHAT LEBIH BANYAK</h4></button>
            }
        </div>
    );
}
 
export default Gallery;