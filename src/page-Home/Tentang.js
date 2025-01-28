import food1 from "../assets/img-1.png"
import food2 from "../assets/img-2.png"
import food3 from "../assets/img-1.png"
import food4 from "../assets/img-1.png"
import Box from "./Box"


const Tentang = () => {
    const gmbr = [
        {src:food1},
        {src:food2},
        {src:food3},
        {src:food4}
    ]
    return (  
        <div className="Tentang">
            <div className="container">
                <div className="contentTentang">
                        <h2>TENTANG KAMI</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, feugiat vel luctus et, tincidunt tincidunt purus. Aenean et nisi at velit malesuada ullamcorper. Sed vel molestie lorem. Vestibulum accumsan purus at sem pharetra mollis. Fusce a pretium mi.</p>
                        <div className="border"></div>
                </div>
            </div>
            <div className="contentTentang2">
                <div className="container">
                    <div className="foodTentang">
                        {gmbr.map((item)=><Box image={item.src}/>)}                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Tentang;