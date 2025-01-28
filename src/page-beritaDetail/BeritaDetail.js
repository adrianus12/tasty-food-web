import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import "./page-beritaDetail.css"
import Footer from "../components/Footer";

const BeritaDetail = () => {
    const {id} = useParams()
    const {error, isPending, data: news} = useFetch('http://localhost:8000/news?id='+id)

    return (
        <div className="beritaDetail">
            <Navbar className={'Navbar'}/>
            <Title title='BERITA KAMI'/>
            
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {news?.[0] && (
                <div className="newsDetail">
                    <div className="detailHead">
                        <img src={news[0].pic} alt="" />                
                        <h1>{news[0].title}</h1>
                    </div>                    
                    <h4>{news[0].body}</h4>
                </div>
            )}
            <Footer/>            
        </div>
    );
}
 
export default BeritaDetail;