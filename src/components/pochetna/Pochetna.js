import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import {Component,Fragment} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { NavLink } from 'react-router-dom'



class Pochetna extends React.Component {
    render() {
        const mystyle = {
            backgroundColor: 'white',
        }
        
        return (

            
            <div style={mystyle}>
     <Carousel autoPlay showThumbs={false} className="carouslePhoto">
        
        
        <div style={{ height: '70vh' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="/wow.jpg" />
         
        </div>
        <div style={{ height: '70vh' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="/img3.jpg" />
          
        </div>
        <div style={{ height: '70vh' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="Zureli8.jpg" />
         
        </div>
        
      </Carousel> 

      <div className="input-field" id="goMore">
            <a href="http://localhost:3000/home"  className="btn green lighten-1" >Види повеќе</a>
     </div>
        
    
    <div >
    <h3 class="TitleSection-heading" id="missionUser">Главниот проблем и нашето решение</h3>
    <p id="missionProblem">Во последно време, социјалните медиуми се преполни со настани за будење на свеста на животната средина. Во нашата земја, еден од најголемите проблеми е проблемот со загадување, но 100 засадени дрва нема да го решат тоа. Затоа, решивме да најдеме начин за глобално да биде проширен масовниот активизам за зачувување на животната средина, а за  секој еден да добие повод да направи такво непто, решивме корисникот да добива некој бенефит за возврат(одреден попуст за некоја услуга, попуст на некое патување, попуст при купување на производ итн.)  Со само една фотографија од засадено дрво или самоиницијативно одрживање на настан за почиста животна средина, си чекор до заштеда.</p>
    <br/>
    
    </div>

    


    

    <Carousel autoPlay showThumbs={false} className="carouslePhoto">
        
        
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/pozar.jpg" />
       
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/Zureli5.jpg" />
        
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="Zureli6.jpg" />
       
      </div>
      
    </Carousel>

    <div >
    <h3 class="TitleSection-heading" id="missionUser">Приклучете се на едно-годишниот настан</h3>
    <p id="missionProblem">Секоја година ќе одржуваме настан за масовно зассадување на дрва, од страна на учесниците. За возврат тие ќе добијат вредносни ваучери од нашите спонзори.</p>
    <br/>
    
    </div>


            
            </div>

           

        );
    }
}


export default Pochetna;