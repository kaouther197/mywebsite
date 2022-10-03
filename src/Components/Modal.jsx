import React from "react";
import "./Modal.css";
import Logo from '../props/table.png'
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
                <img src={Logo} width='70%' height='50%' alt="tp1" />
            </div>
            <div className="footer">

                <button onClick={(e)=>{
                    var result = prompt("Please enter password to download your tp:", " ");
            if (result === "brahim1424") {
              e.preventDefault();
                    window.location.href = 'https://www.mediafire.com/file/qvj3ymos826fkwx/tp1_brahim_kedjar_group1.rar/file';

            } else {
              alert("incorrect");
            }
                   
                }}>Download File</button>
            </div>
        </div>
    );
}

export default Modal;
