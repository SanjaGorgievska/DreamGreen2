import React, {Component} from 'react';
import {storage} from './../../config/fbConfig';

class PrikachiSlika extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;

      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    
    return (
    


<div class="row">

<div class="col s12 m6 l3">
  



<h5 className="grey-text text-darken-3" id="kreiraj">Внесете валидна слика за настанот потпишана со ваш код</h5>
  
          <div >
      <div >

    
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
    
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/200x200'} alt="Uploaded images" height="200" width="200"/>
        <button button className="btn green lighten-1" onClick={this.handleUpload}>Прикачи и потврди</button>
   
    </div>  </div></div></div>


    
    )
  }
}

export default PrikachiSlika;