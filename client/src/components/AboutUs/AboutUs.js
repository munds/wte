import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import * as Image from '../public/images';


function AboutUs() {
   return (
     <div>
      <div className="row">
         <div classNames="col s12 m7">
            <div className="card">
               <div className="card-image">
                  <img src="./public/images/Danny.png" />
                  <span className="card-title">Danny Duarte</span>
               </div>
               <div cclassName="card-content">
                  <p>front end</p>
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
                  <img src="../public/images/Zach.png" />
                  <span className="card-title">Zach</span>
               </div>
               <div className="card-content">
                  <p>Back end</p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/Pearlybrah">Github</a>
               </div>
               </div>
            </div>
         </div>

   <div className="row">
      <div className="col s12 m7">
         <div className="card">
            <div className="card-image">
               <img src="../public/images/Brandon.png" />
               <span className="card-title">Brandon Rosano</span>
            </div>
               <div className="card-content">
                  <p>Front End/UI designer </p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/brandonrosano">Github</a>
               </div>
            </div>
         </div>
      </div>
      
      <div className="row">
         <div className="col s12 m7">
            <div className="card">
               <div className="card-image">
                  <img src="./public/images/Edgar.png"/>
                  <span className="card-title">Edgar</span>
               </div>
               <div className="card-content">
                     <p>I am a very simple card. I am good at containing small bits of information.
                     I am convenient because I require little markup to use effectively.</p>
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
                  <img src="./public/images/Mouz.jpg"/>
                  <span className="card-title">Edgar</span>
               </div>
               <div className="card-content">
                     <p>I am a very simple card. I am good at containing small bits of information.
                     I am convenient because I require little markup to use effectively.</p>
               </div>
               <div className="card-action">
                  <a href="https://github.com/maztronics">Github</a>
               </div>
               </div>
            </div>
         </div>
         </div>
         );
         
     };
     
     export default AboutUs;
