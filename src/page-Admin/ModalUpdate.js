import { createPortal } from "react-dom";
import { useEffect, useState } from 'react';

const NewsDetail = ({show,onClose,data,refresh,dataUrl,dataId,detail}) => {
    
    const [ form, setForm ] = useState({})
    
    const updateForm = ()=>{
        console.log(form)
        fetch(dataUrl+dataId,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(form)
        }).then((response)=>{
                console.log(response)       
                setForm({})
                onClose()
                refresh()
            })
    }

    useEffect(()=>{
        if (!show) return 
        setForm(data)
    },[show,data])

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
                            <h3>EDIT NEWS</h3>
                        </div>
                        <button onClick={()=> {                        
                            onClose()
                            setForm({})
                        }}>close</button>
                    </div>
                    <div className="modalContent">
                        <form action="" onSubmit={(event)=>{
                            event.preventDefault()
                            console.log(dataUrl,dataId)
                            updateForm()
                        }}>
                            <div className="modalHeader">
                                <h3>Image:</h3>
                                <input type="file" onChange={handleSelectImage}/>
                            </div>
                            <div className="modalPic">
                                <img src={form.pic} alt="" />
                            </div>
                            <div className="modalDesc">    
                            {detail &&                         
                                <div className="editForm">
                                    <h3>Title:</h3>
                                    <input type="text" value={form.title} onChange={(e)=>setForm((prev)=>({...prev,title:e.target.value.toUpperCase()}))}/>
                                    <h3>Description:</h3>
                                    <textarea value={form.body} onChange={(e)=>setForm((prev)=>({...prev,body:e.target.value}))}/>
                                </div>
                            }
                                <button className="blackButton" type="submit"><h4>Save</h4></button>
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
 
export default NewsDetail;