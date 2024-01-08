import style from "./Modal.module.css";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen &&
        <>
          <div className={style.blur}>
            <div className={style.modal_container}>
              <RxCross1 onClick={onClose} className={style.cross} />
              {children}    
            </div>
            
          </div>
        </>
      }
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
