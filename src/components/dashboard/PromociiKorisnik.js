import React from 'react'
import moment from 'moment'

const PromociiKorisnik = (props) => {

  return (
<div>
   
        <div><p><a class="waves-effect waves-light btn"><i class="material-icons left">add_shopping_cart</i>Актуелни понуди за ваш вкус</a></p> </div> 



     <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="270" height="260" src="https://cheddars.com/wp-content/uploads/images/menu-item-images/menu-599-potato-soup-house-salad.jpg"/>
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

    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="270" height="260" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2009/01/12215922/dog-at-vet-800x534.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">15% ветеринар за куче<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Доијте 15% попуст за вашиот миленик<i class="material-icons right">close</i></span>
      <p> Работно време пон-нед од 09:00 до 01:00 часот. Ве очекуваме!</p>
    </div>

    </div>

    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator"  width="270" height="260" src="https://cdn.shopify.com/s/files/1/0050/5171/1555/products/Pinkah-380-500ml-304-Stainless-Steel-Thermo-Cup-Travel-Coffee-Mug-with-Lid-Car-Water-Bottle_1c5a0e7f-38ca-4156-8656-ab6d6e481991.jpg?v=1546608563"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">20% попуст на термос<i class="material-icons right">more_vert</i></span>
      <p><a href="#">Стави во кошничка  <i class="tiny material-icons">shopping_cart</i></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Добијте 20% попуст на термос<i class="material-icons right">close</i></span>
      <p> Работно време пон-нед од 09:00 до 01:00 часот. Ве очекуваме!</p>
    </div>

    </div>


    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">Ваши заслуги</span>
        <ul className="online-users">
         Имате уште: 40% попуст за искористување.
       
        </ul>
      
        <button class="btn waves-effect waves-light" type="submit" name="action">Искористи попуст
  <i class="material-icons right">send</i>
</button>
       
 
      </div>
    </div>
    </div>
  )
}

export default PromociiKorisnik