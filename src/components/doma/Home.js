import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const Home = ({}) => {
    return (

        <div>

<div class="row">

 <div class="col s1 m1 l2">
  </div>
  </div>

        <div class="row">
        <div class="col s2 m2 l2"></div>
        <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="270" src="http://artmansnursery.com/wp-content/uploads/2018/08/trees-planting-blog.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Засадено дрво на Скопска Црна Гора<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Наташа Нетковска  </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 15% попуст<i class="material-icons right">close</i></span>
      <p>Секој ден од понеделник до недела, можете да купите кафе во КафеБар Скопје, на улица Дигит.
        Понесете со себе термос за грижа на околината и нула отпад!
      </p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="318" height="270" src="https://www.demilked.com/magazine/wp-content/uploads/2019/03/5c8772d1e0b6e-trashtag-challenge-people-clean-surroundings-107-5c8659375856f__700.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Собран отпад во подрачје Гази Баба<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Наташа Стојанова  </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 40% попуст<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="270"  src="https://www.thehits.co.nz/media/6501444/reusable-bags.jpg?mode=crop&width=620&height=349&quality=60&scale=both"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Пазарење во реискористлива кеса<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Сања Георгиевска  </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 30% попуст<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
</div>
    </div>
  </div>

  <div class="row">
        <div class="col s2 m2 l2"></div>

          <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"  src="https://media.gettyimages.com/videos/woman-picking-mushrooms-and-drinking-coffee-in-the-forest-video-id1044904604?s=640x640"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Пиење напиток од пренослив термос<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Петар Станковски </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 5% попуст<i class="material-icons right">close</i></span>
      <p>На датум 30.10.2019 појдов во КафеБар и наместо да купам пренослово кафе ми го наполнија термосот.</p>
    </div>
</div>
    </div>
        <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="318" height="260"src="https://www.lifewithdogs.tv/wp-content/uploads/2013/07/130723-Gozques.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Хранење на бездомно животно<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Ацо Шопов </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 10% попуст<i class="material-icons right">close</i></span>
      <p>HНахрането бездомно куче во населба Хиподором.</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"src="https://tealeafswny.com/wp-content/uploads/2017/09/Tea-Infuser-Mesh-Balls.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Купен реискористива алатка за чај<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Стефан Стефановски  </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 10% попуст<i class="material-icons right">close</i></span>
      <p>На датум 29.10.2019 купив реискористлива четка за чај.</p>
    </div>
</div>
    </div>

   

  





  </div>

  <div class="row">
        <div class="col s2 m2 l2"></div>
        <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="318" height="260" src="http://mk20.com/solar/images/160aa.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Поставен болјер на соларна енергија<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Бојана Петковска  </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 25% попуст<i class="material-icons right">close</i></span>
      <p>Купен е болјер со соларни панели во среда, 30.10.2019 во продажен салон Дигит, Скопје.</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"src="https://5.imimg.com/data5/IG/GN/PR/SELLER-82117414/bamboo-toothbrush-500x500.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Користење на четка за заби од дрво<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Дина Донеска  </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 5% попуст<i class="material-icons right">close</i></span>
      <p>Купена е четка за заби в четврток 1.10.2019.</p>
    </div>
</div>
    </div>

    <div class="col s12 m6 l3"> <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" width="318" height="260"  src="https://assets.thehansindia.com/h-upload/feeds/2019/03/12/128547-food.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Хранење на бездомно куче<i class="material-icons right">more_vert</i></span>
      <p>Објавено од: Маја Мајовска  </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добивка: 15% попуст<i class="material-icons right">close</i></span>
      <p>Нахрането е бездомно куче во населба Аеродром, кај паркот Јане Сандански во петок 2.11.19. Дадена му е домашно приготвена храна - сѐ со цел да има нула отпад.</p>
    </div>
</div>
    </div>
  </div>

      </div>


      

      
     
 
    )
  }

export default Home