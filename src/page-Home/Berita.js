import BoxBerita from '../components/BoxBerita'
import useFetch from '../components/useFetch'

const Berita = () => {
    const {error, isPending, data: news} = useFetch('http://localhost:8000/news')
    
    return (  
        <div className="beritaHome">
            <h2>BERITA KAMI</h2>
            <div className="contentBerita">
                {error && <div>{error}</div>}
                {isPending && <div>Loading....</div>}
                <div className="contentMain">
                    {news && <BoxBerita image={news[0].pic} title={news[0].title} content={news[0].body} id={news[0].id}/>}
                </div>
                <div className="contentSide">
                    {news && news.slice(1,5).map((berita)=>
                        <BoxBerita image={berita.pic} title={berita.title} content={berita.body} id={berita.id}/>)
                    }          
                </div>
            </div>
        </div>
    );
}
 
export default Berita;