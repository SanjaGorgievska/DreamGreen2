import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import PrikachiSlika from './PrikachiSlika'


class KreirajProekt extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        
        <form className="white" onSubmit={this.handleSubmit}>
          
          <h5 className="grey-text text-darken-3" id="kreiraj"><b>Додај податоци за вашето ново еко-дело</b> </h5>
         
          <p>
          <h6 className="grey-text text-darken-3" id="kreiraj">Внесете информации за настанот</h6>

      </p>
          <div className="input-field" id="kreirajnov">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Наслов на еко делото</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Содржина на активноста</label>
          </div>

          <p>
          <h6 className="grey-text text-darken-3" id="kreiraj">Одберете категорија во која спаѓа настанот</h6>

      </p>



          <p>
      <label>
        <input type="checkbox" />
        <span>Засадено дрво</span>
      </label>
      </p>

      <p>
      <label>
        <input type="checkbox" />
        <span>Исчистен отпад</span>
      </label>
      </p>

      <p>
      <label>
        <input type="checkbox" />
        <span>Купено кафе со свој термос</span>
      </label>
      </p>
  
      <p>
      <label>
        <input type="checkbox" />
        <span>Користење на реискористлив еколошки производ</span>
      </label>
      </p>

      <p>
      <label>
        <input type="checkbox" />
        <span>Ваша идеја:<input placeholder="Краток опис на идејата" id="first_name" type="text" class="validate"/></span>
      </label>
      
      </p>
    
   
       
         
           
            
          <div>
          <PrikachiSlika />
        </div>

     
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KreirajProekt)