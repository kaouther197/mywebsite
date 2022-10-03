import React, { useEffect, useState } from "react";
import "./Section2.css";

function Details() {
  const [active, setactive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const section2 = document.querySelector(".section2");
      var section2_top = section2.getBoundingClientRect().top;

      if (section2_top < windowHeight - animationPoint) {
        setactive(true);
      }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`section2 ${active && "active"}`} id="Section2">
      <div className="text-content">
        <div className="text text1">
          <h1>
            About <span>Me</span>
          </h1>
          <h2>
            Étudiant en master Ingénierie des Données et Technologie Web à
            l'Université Ferhat Abbas, j'ai de lexpérience avec un large éventail de
            langages de programmation et de technologies, j'ai excellé dans mes
            études grâce à de grandes compétences en résolution de problèmes, en
            travail d'équipe et en leadership.
          </h2>
        </div>

        <div className="text text2">
          <h1>
            <span>Experiences</span> so far
          </h1>
          <h2>
          
            ↪Front-End Coding<br/>
            ↪Back-End Coding<br />
            ↪Database administration and website design<br />
            ↪Build Web Site With Wordpress And Ecommerce<br />
            ↪Connaissance des API et des webservices.<br />
            ↪Problem-Solving<br />
            ↪Project Management Tools<br />
            ↪Strong Communication<br />
             ↪HTML - CSS3 - JAVASCRIPT - PHP - SQL_MySql - JAVAbr />
            ↪C++ - C# - .net - LARAVEL - React JS - Angular - FLUTTER - ANDROIDbr />

          </h2>
        </div>
      </div>
      <div style={{ color: "white",textAlign:"center",marginLeft:"40%",marginTop:"50px",marginBottom:"-50px" }}><h1>Some Of My Work : </h1></div><br />
      <h1 style={{textAlign:"center",marginLeft:"50%",marginTop:"50px",marginBottom:"-50px" }}>  👇</h1>
      <div className="progress">
        <div className="container" style={{ "--x": 1 }} onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://brahim-kedjar-meteo.vercel.app/';
        }}>
          <h2>1</h2>
          <span>Weather</span>
        </div>

        <div className="container" style={{ "--x": 2 }} onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://brahim-kedjar-messenger.vercel.app/';
        }}>
          <h2>2</h2>
          <span>Messenger</span>
        </div>
        <div className="container" style={{ "--x": 3 }} onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://homwork.vercel.app/';
        }}>
          <h2>3</h2>
          <span>Portfolio</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
