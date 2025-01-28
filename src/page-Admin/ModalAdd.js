import { createPortal } from "react-dom";
import { useEffect, useState } from 'react';
import useFetch from '../components/useFetch'


const ModalAdd = ({show,onClose,refresh,dataUrl,detail}) => {
    
    const [ form, setForm ] = useState({})

    const submitForm = ()=>{
        console.log(form)
        fetch(dataUrl,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({...form,id:addId.toString()
            })
        }).then((response)=>{
                console.log(response)               
                setAddId((prev)=>(prev+1))
                setForm({})
                onClose()
                refresh()
            })
    }

    const {data: news} = useFetch(dataUrl)
    const [addId, setAddId] = useState(1)
    useEffect(()=>{
        if (!news) return 
        setAddId(parseInt(news.slice(-1)[0]?.id)+1 || 1)
    },[news])

    const handleSelectImage = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
            setForm((prev)=>({...prev,pic:fileReader.result}));
        });
        fileReader.readAsDataURL(file);
    }

    

    if (!show) return <></>
    return (  
        <Portal>
            <div className="modalBg" >
                <div className="modalBox">
                    <div className="modalToolbar">
                        <div className="modalTitle">
                            <h3>ADD NEWS</h3>
                        </div>
                        <button onClick={()=> {                        
                            onClose()
                            setForm({})
                        }}>close</button>                       
                    </div>
                    <div className="modalContent">
                        <form action="" onSubmit={(event)=>{
                            event.preventDefault()
                            submitForm()
                        }}>
                            
                            <div className="modalHeader">
                                <h3>Add Image:</h3>
                                <input type="file" onChange={handleSelectImage}/>                                                                 
                            </div>           
                            <div className="modalPic">
                                {form.pic && <img src={form.pic} alt=''/>}                        
                            </div>             
                            <div className="modalDesc">
                                {detail && 
                                    <div className="editForm">
                                        <h3>Add Title:</h3>
                                        <input type="text" placeholder="Add Title" value={form.title || "" } onChange={(e)=>setForm((prev)=>({...prev,title:e.target.value.toUpperCase()}))}/>
                                        <h3>Add Description:</h3>
                                        <textarea placeholder="Add Description" value={form.body || "" } onChange={(e)=>setForm((prev)=>({...prev,body:e.target.value}))}/>
                                    </div>
                                }
                                <button className="blackButton" type="submit"><h4>Add</h4></button>
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        </Portal>
    );
}

function Portal ({children}) {
    return createPortal(children, document.body);
}
 
export default ModalAdd;