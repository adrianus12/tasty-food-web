import { Link } from "react-router-dom";

const BoxBerita = ({image,title,content,id}) => {
    return (  
        <div className="boxBerita">
            
            <img src={image} alt="" />
            <div className="boxText">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className="boxFooter">
                <Link to={`/berita/${id}`} className="link2" onClick={() => {window.scroll(0, 450);}}>                    
                    <h5>Baca selengkapnya</h5>
                    <h3>...</h3>                    
                </Link>
            </div>
        </div>
    );
}
 
export default BoxBerita;