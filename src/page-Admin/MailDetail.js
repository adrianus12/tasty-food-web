import { createPortal } from "react-dom";

const MailDetail = ({show,onClose,data}) => {
    if (!show) return <></>
    return (  
        <Portal>
            <div className="modalBg" >
                <div className="modalBox">
                    <div className="modalToolbar">
                        <div className="modalTitle">
                            <h3>MAIL FOR YOU</h3>
                        </div>
                        <button onClick={onClose}>close</button>
                    </div>
                    <div className="modalContent">
                        <div className="modalHeader">
                            <h3>From:</h3>
                            <h4>{data.name}</h4>
                            <p>{`<`}{data.email}{`>`}</p>
                        </div>
                        <div className="line"></div>
                        <div className="modalDesc">
                            <h3>{data.subject}</h3>
                            <p>{data.message}</p>
                        </div>
                    </div>
                </div>                
            </div>
        </Portal>
    );
}

function Portal ({children}) {
    return createPortal(children, document.body);
}

export default MailDetail;