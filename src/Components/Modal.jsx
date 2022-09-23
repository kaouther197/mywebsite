import React from "react";
import "./Modal.css";
import Logo from '../props/TP11.png'
function Modal({ setOpenModal }) {
    return (
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => {
                        setOpenModal(false);
                    }}>
                    X </button>
            </div>
            <div className="body">
                <img src={Logo} width='600' height='400' alt="tp1" />
            </div>
            <div className="footer">

                <button>Download File</button>
            </div>
        </div>
    );
}

export default Modal;