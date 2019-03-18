import React from "react";
import Danny from './images/danny.png';
import Brandon from './images/brandon.png';
import Zach from './images/zach.png';
import Edgar from './images/edgar.png';
import Mouz from './images/mouz.jpg';
import "./style.css"

function AboutUs() {
   return (
     <div>

      <div className="row">
         <div className="col s12 m7">
            <div className="card">
               <div className="card-image">
                  <img src={Brandon} alt="Brandon" />
                  <span className="card-title">Brandon Rosano</span>
               </div>
               <div className="card-content">
                  <p>Front End/UI designer</p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/brandonrosano">Github</a>
               </div>
            </div>
         </div>
      </div>

      <div className="row">
         <div classNames="col s12 m7">
            <div className="card">
               <div className="card-image">
                  <img src={Danny} alt="Danny" />
                  <span className="card-title">Danny Duarte</span>
               </div>
               <div className="card-content">
                  <p>API</p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/dannyd2313">Github</a>
               </div>
            </div>
         </div>
      </div>

      <div className="row">
         <div className="col s12 m7">
            <div className="card">
               <div className="card-image">
                  <img src={Edgar} alt="Edgar" />
                  <span className="card-title">Edgar</span>
               </div>
               <div className="card-content">
                  <p>Front End & Back End</p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/EdgarM510">Github</a>
               </div>
               </div>
            </div>
         </div>

         <div className="row">
         <div className="col s12 m7">
            <div className="card">
               <div className="card-image">
                  <img src={Mouz} alt="Mouz" />
                  <span className="card-title">Mouz</span>
               </div>
               <div className="card-content">
                  <p>Front End/UI</p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/maztronics">Github</a>
               </div>
               </div>
            </div>
         </div>

      <div className="row">
         <div className="col s12 m7">
            <div className="card">
               <div className="card-image">
                  <img src={Zach} alt="Zach" />
                  <span className="card-title">Zach</span>
               </div>
               <div className="card-content">
                  <p>Back End</p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/Pearlybrah">Github</a>
               </div>
               </div>
            </div>
         </div>

         </div>
         );
         
     };
     
     export default AboutUs;
