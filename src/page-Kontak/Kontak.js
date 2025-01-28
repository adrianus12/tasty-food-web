import './page-kontak.css'

import Navbar from "../components/Navbar";
import Title from "../components/Title";

import img1 from '../assets/Group 66.png'
import img2 from '../assets/Group 67.png'
import img3 from '../assets/Group 68.png'
import Modal from './Modal'
import { useEffect, useState } from 'react';
import useFetch from '../components/useFetch'
import Footer from '../components/Footer';

const Kontak = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClose = ()=>{setShowModal(false)}
    const [ form, setForm ] = useState({})

    const submitForm = ()=>{
        console.log(form)
        fetch('http://localhost:8000/mail',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({...form,id:addId.toString()
            })
        }).then((response)=>{
                console.log(response)
                setShowModal(true)                
                setAddId((prev)=>(prev+1))
                setForm({})
            })
    }
    
    const {data: mails} = useFetch('http://localhost:8000/mail')
    
    const [addId, setAddId] = useState(1)
    useEffect(()=>{
        console.log('set id')
        if (!mails) return 
        setAddId(parseInt(mails.slice(-1)[0]?.id)+1 || 1)
    },[mails])
    

    return (  
        <div className="kontak">            
            <Modal show={showModal} onClose={handleClose}/>            
            <Navbar className={'Navbar'}/>
            <Title title='KONTAK KAMI'/>
            <div className="kontakContent">
                <h2>KONTAK KAMI</h2>
                <form action="" onSubmit={(event)=>{
                    event.preventDefault()
                    submitForm()
                }}>                
                    <div className="kontakForm">
                        <div className="form1">
                            <input type="text" placeholder="Subject" value={form.subject || "" } onChange={(e)=>setForm((prev)=>({...prev,subject:e.target.value}))}/>
                            <input type="text" placeholder="Name" value={form.name || "" } onChange={(e)=>setForm((prev)=>({...prev,name:e.target.value}))}/>
                            <input type="text" placeholder="Email" value={form.email || "" } onChange={(e)=>setForm((prev)=>({...prev,email:e.target.value}))}/>
                        </div>
                        <textarea name="" id="" placeholder='Message' value={form.message || "" } onChange={(e)=>setForm((prev)=>({...prev,message:e.target.value}))}/>                           
                    </div>
                        <button className='blackButton' type='submit'><h4>KIRIM</h4></button>
                </form>
                <div className="kontakInfo">
                    <div className="info">
                        <img src={img1} alt="" />
                        <h3>EMAIL</h3>
                        <p>tastyfood@gmail.com</p>
                    </div>
                    <div className="info">
                        <img src={img2} alt="" />
                        <h3>PHONE</h3>
                        <p>+62 800 6000 7000</p>
                    </div>
                    <div className="info">
                        <img src={img3} alt="" />
                        <h3>LOCATION</h3>
                        <p>Kota Bandung, Jawa Barat</p>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965096626!2d107.56075437346023!3d-6.903271950540113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1730470450642!5m2!1sen!2sid" title='maps'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Kontak;