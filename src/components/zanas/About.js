import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';


const About = ({}) => {
  const mystyle = {
    backgroundColor: 'white',
}

    return (

        <div>

<Carousel autoPlay showThumbs={false} className="carouslePhoto">
        
        
        <div style={{ height: '70vh' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="/sale4.jpg" />
         
        </div>
        <div style={{ height: '120vh' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="/sale5.jpeg" />
          
        </div>
        <div style={{ height: '70vh' }}>
          <img style={{ height: '100%', objectFit: 'cover' }} src="/sale6.jpeg" />
         
        </div>
        
      </Carousel>
  

<div class="row">



 <div class="col s1 m1 l2">
  </div>
  </div>

        <div class="row">
        <div class="col s2 m2 l2"></div>
        <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="270" src="http://www.todayifoundout.com/wp-content/uploads/2014/01/coffee3.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">15% кафе за носење<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добијте попуст на кафе<i class="material-icons right">close</i></span>
      <p>Секој ден од понеделник до недела, можете да купите кафе во КафеБар Скопје, на улица Дигит.
        Понесете со себе термос за грижа на околината и нула отпад!
      </p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="318" height="270" src="https://cheddars.com/wp-content/uploads/images/menu-item-images/menu-599-potato-soup-house-salad.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">45% јадење по избор<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Одберете ручек по ваш избор со 45% попуст.<i class="material-icons right">close</i></span>
      <p>Добијте попуст на оброк по ваш избор во ресторанот Дигит. Работно време пон-нед од 09:00 до 01:00 часот. Ве очекуваме!</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="270"  src="http://vayomassage.com/wp-content/uploads/2014/04/THAI-MASSAGE-PATONG-PHUKET.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">30% масажа на грб<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Дозволете си релаксација во салонот за убавина<i class="material-icons right">close</i></span>
      <p>Со оваа ексклузивна понуда добивате 30% масажа на грб во спа центар.</p>
    </div>
</div>
    </div>
  </div>

  <div class="row">
        <div class="col s2 m2 l2"></div>

          <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"  src="https://i0.wp.com/metro.co.uk/wp-content/uploads/2019/02/gettyimages-908178810.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">15% патување<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Патувајте со агенцијата Дигит<i class="material-icons right">close</i></span>
      <p>Искористете го попустот и добијте тро-дневно патување во Италија, полупансион.</p>
    </div>
</div>
    </div>
        <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="318" height="260"src="https://b3h2.scene7.com/is/image/BedBathandBeyond/BETTER%20MSWP%205172644?$content$&wid=832&hei=520"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">10% процесор за храна<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Мултифункционален процесор за храна<i class="material-icons right">close</i></span>
      <p>Овој процесор со три сечила, ја ситни храната до најситни парчиња.</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">20% храна за миленик<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добијте попуст на квалитетна храна<i class="material-icons right">close</i></span>
      <p>Пакувањето на храната е составено од биоразградливи материјали, што значи дека нема да ја загади околината.</p>
    </div>
</div>
    </div>

   

  





  </div>

  <div class="row">
        <div class="col s2 m2 l2"></div>
        <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="318" height="260" src="https://images.squarespace-cdn.com/content/v1/5169ccf2e4b0f7270657a460/1456360138909-37FL3XCR3CVQC42H00JL/ke17ZwdGBToddI8pDm48kKLHmMs23ZxPgeOu8Yrs55d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgXXATmnXitsEasKvdtVty7KcIpiUOmkkpuOP9PWkdpi9w/Dollarphotoclub_77217145.jpg?format=1500w"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">10% сервис за лаптоп<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Искористете го попустот, и добијте сервис за лаптоп<i class="material-icons right">close</i></span>
      <p>Со овој попуст добивате детална дијагностика и сервис од врвни експерти.</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/why_does_your_doctor_do_that_quiz/493x335_why_does_your_doctor_do_that_quiz.jpg?resize=493:*"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">20% очен преглед<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Очен преглед по намалена цена<i class="material-icons right">close</i></span>
      <p>Вршиме детален преглед на вашите очи со најсовремена апаратура.</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"  src="https://wonderfunbcn.com/wp-content/uploads/2017/11/happy-kids.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">20% игротека<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добијте 20% попуст во игротека <i class="material-icons right">close</i></span>
      <p>Попустот може да го искористите од понеделник до петок од 9 до 21 часот во игротеката Мајмунче. </p>
    </div>
</div>
    </div>
  </div>

      </div>


      

      
     
 
    )
  }

export default About