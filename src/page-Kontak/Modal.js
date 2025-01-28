import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({show,onClose}) {
    
    if (!show) return <></>
    return(
        <Portal>
            <div className="mod" onClick={onClose}>
                {/* <div className="backdrop">
                </div> */}
                <div className="text">
                    <h3>Data Terkirim!</h3>
                </div>
            </div>
        </Portal>
    );
}

function Portal ({children}) {
    return createPortal(children, document.body);
}

export default Modal;