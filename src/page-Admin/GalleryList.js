import AdminNavbar from "./AdminNavbar";
import useFetch from "../components/useFetch";
import { useEffect, useState } from 'react';
import ModalAdd from "./ModalAdd";
import ModalUpdate from "./ModalUpdate";

const GalleryList = () => {
    const url = process.env.REACT_APP_URLDATA + '/galleries/'
    const {error, isPending, data: gallery, fetchData} = useFetch(url)
    const [showModal, setShowModal] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const handleClose = ()=>{setShowModal(false)}
    const handleClose2 =()=>{setShowAdd(false)}
    const [modalGallery, setModalGallery] = useState()
    const [tempId, setTempId] = useState()

    const removeData=((id)=>{
        if(window.confirm('delete this data ??')){
            fetch(url+id,
                {
                    method:'DELETE'
                }).then(()=>{
                    // window.location.reload()
                    fetchData()
                }).catch((err)=>{
                    console.log(err.message)
                })
        }
    })

    const [filteredData, setFilteredData] = useState([])
    const [sortOpt, setSortOpt] = useState('ID-Asc')

    useEffect(()=>{
        setFilteredData(gallery)
    },[gallery])

    const handleSort = (sortType) => {
        const sortItem = filteredData.sort((a,b) => {
            if(sortType === 'ID-Asc'){
                return a.id - b.id
            }
            if(sortType === 'ID-Des'){
                return b.id - a.id
            }
        })
        setFilteredData(sortItem)
        setSortOpt(sortType)
    }

    return (  
        <div className="galleryList">
            <ModalUpdate show={showModal} onClose={handleClose} data={modalGallery} refresh={fetchData} dataUrl={url} dataId={tempId} detail={false}/>
            <ModalAdd show={showAdd} onClose={handleClose2} refresh={fetchData} dataUrl={url} detail={false}/>
            <AdminNavbar intro='GALLERY Page'/>
            <div className="header">
                <div className="headerL">
                    <div className="dropdown">
                        <button className="dropbtn"><p>Sort by {sortOpt}</p></button>
                        <div className="dropdown-content">
                            <button onClick={()=>{handleSort('ID-Asc')}}><p>ID Asc</p></button>
                            <button onClick={()=>{handleSort('ID-Des')}}><p>ID Des</p></button>                            
                        </div>
                    </div>
                </div>
                <div className="headerR">
                    <button onClick={()=>{
                        setShowAdd(true)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                        <h4>Add Image</h4>
                    </button>
                </div>
            </div>
            <table>
                <tr>
                    <th className="w5"><h3>ID</h3></th>
                    <th className="w25"><h3>IMAGE</h3></th>
                    <th className="w20"><h3>ACTION</h3></th>
                </tr>
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {filteredData && filteredData.map((galeri)=>(
                <tr className="dataRow">
                    <td><h4>{galeri.id}</h4></td>
                    <td className="tdImg"><img src={galeri.pic} alt="" /></td>                    
                    <td>
                        <div className="butAction">
                            <button onClick={()=>{
                                setTempId(galeri.id)
                                setShowModal(true)
                                setModalGallery(galeri)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </button>                            
                            <button onClick={()=>{removeData(galeri.id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    </td>                           
                </tr>))
            }
            </table>
        </div>
    );
}
 
export default GalleryList;