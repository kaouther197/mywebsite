import React, { useState, useEffect } from "react";
import "./Collection.css";
import Modal from "./Modal";

function Collection() {
  const [active, setactive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const collection = document.querySelector(".collection");
      var collection_top = collection.getBoundingClientRect().top;

      if (collection_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);
 
  return (
    <div className={`collection ${active && "active"}`} id="Collection">
      <h1>
        My <span>ULTIMATE</span> Home Work
      </h1>
      <div className="collections-container">
        <div className="cl-row row1">
          <div className="nft1" onClick={() => {
            setModalOpen(true);
          }}></div>
          <div className="nft2" onClick={() => {
            setModalOpen(true);
          }}></div>
          <div className="nft3" onClick={() => {
            setModalOpen(true);
          }}></div>
          <div className="nft4" onClick={() => {
            setModalOpen(true);
          }}></div>
          
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
        
      </div>
      
    </div>
  );
}

export default Collection;
