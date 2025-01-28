import useFetch from "../components/useFetch";
import AdminNavbar from "./AdminNavbar";
import { useEffect, useState } from 'react';
import MailDetail from "./MailDetail";

const MailList = () => {
    const url = 'http://localhost:8000/mail/'
    const {error, isPending, data: mails} = useFetch(url)
    const [showModal, setShowModal] = useState(false)
    const handleClose = ()=>{setShowModal(false)}
    const [modalMail, setModalMail] = useState()

    const removeData=((id)=>{
        if(window.confirm('delete this data ??')){
            fetch(url+id,
                {
                    method:'DELETE'
                }).then(()=>{
                    window.location.reload()
                }).catch((err)=>{
                    console.log(err.message)
                })
        }
    })

    const [searchItem, setSearchItem] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [sortOpt, setSortOpt] = useState('ID-Asc')

    useEffect(()=>{
        setFilteredData(mails)
    },[mails])

    const handleInputSearch =(e) => {
        const searchTerm = e.target.value
        setSearchItem(searchTerm)

        const filteredItems = mails.filter((mail) =>
            mail.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mail.subject.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredData(filteredItems)
    }

    const handleSort = (sortType) => {
        const sortItem = filteredData.sort((a,b) => {
            if(sortType === 'ID-Asc'){
                return a.id - b.id
            }
            if(sortType === 'ID-Des'){
                return b.id - a.id
            }
            if(sortType === 'Name-Asc'){
                return a.name.localeCompare(b.name)
            }
            if(sortType === 'Name-Des'){
                return b.name.localeCompare(a.name)
            }

        })
        setFilteredData(sortItem)
        setSortOpt(sortType)
    }

    return (
        <div className="mailList">
            <MailDetail show={showModal} onClose={handleClose} data={modalMail}/>
            <AdminNavbar intro="MAIL Page"/>
            <div className="header">
                <div className="headerL">
                    <input type="text" placeholder="Search..." value={searchItem} onChange={handleInputSearch} />
                    
                    <div className="dropdown">
                        <button className="dropbtn"><p>Sort by {sortOpt}</p></button>
                        <div className="dropdown-content">
                            <button onClick={()=>{handleSort('ID-Asc')}}><p>ID Asc</p></button>
                            <button onClick={()=>{handleSort('ID-Des')}}><p>ID Des</p></button>
                            <button onClick={()=>{handleSort('Name-Asc')}}><p>Name Asc</p></button>
                            <button onClick={()=>{handleSort('Name-Des')}}><p>Name Des</p></button>
                        </div>
                    </div>
                </div>
            </div>
            <table>
                <tr>
                    <th className="w5">ID</th>
                    <th className="w20"><h3>EMAIL</h3></th>
                    <th className="w15"><h3>NAME</h3></th>
                    <th className="w20"><h3>SUBJECT</h3></th>
                    <th className="w30"><h3>MESSAGE</h3></th>
                    <th className="w10"><h3>ACTION</h3></th>
                </tr>                   
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {filteredData && filteredData.map((mail)=>(                    
                <tr className='dataRow'>
                    <td><h4>{mail.id}</h4></td>
                    <td><h4>{mail.email}</h4></td>
                    <td><h4>{mail.name}</h4></td>
                    <td><h4>{mail.subject}</h4></td>
                    <td><h4>{mail.message}</h4></td>
                    <td>
                        <div className="butAction">
                            <button onClick={()=>{
                                setShowModal(true)
                                setModalMail(mail)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                </svg>
                            </button>
                            <button onClick={()=>{removeData(mail.id)}}>
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
 
export default MailList;