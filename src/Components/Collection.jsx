import React, { useState,  } from "react";
import "./Collection.css";
import Modal from "./Modal";

function Collection() {
  const [modalOpen, setModalOpen] = useState(false);

 
 
  return (
    <div className={`collection ${"active"}`} id="Collection">
      <h1>
        My <span>ULTIMATE</span> Home Work
      </h1>
      <div className="collections-container">
        <div className="cl-row row1">
          <div className="nft1" onClick={() => {
            var result = prompt("Please enter password to show your tp:", " ");
            if (result === "brahim1424") {
              setModalOpen(true);

            } else {
              alert("incorrect");
            }
            
          }}></div>
          <div className="nft2" onClick={() => {
            var result = prompt("Please enter password to show your tp:", " ");
            if (result === "brahim1424") {
              setModalOpen(true);

            } else {
              alert("incorrect");
            }
          }}></div>
          <div className="nft3" onClick={() => {
            var result = prompt("Please enter password to show your tp:", " ");
            if (result === "brahim1424") {
              setModalOpen(true);

            } else {
              alert("incorrect");
            }
          }}></div>
          <div className="nft4" onClick={() => {
            var result = prompt("Please enter password to show your tp:", " ");
            if (result === "brahim1424") {
              setModalOpen(true);

            } else {
              alert("incorrect");
            }
          }}></div>
          
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        
      </div>
      
    </div>
  );
}

export default Collection;
