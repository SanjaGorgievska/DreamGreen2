import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right" id="signin1">
      <li id="nov_proekt"><NavLink to='/pochetna'>Почетна</NavLink></li>
      <li id="nov_proekt"><NavLink to='/home'>Акции</NavLink></li>
      <li id="nov_proekt"><NavLink to='/promocii' id="kreiraj_proekt">Промоции</NavLink></li>
      <li> <NavLink to='/'>Профил</NavLink>
         </li>
        <li id="nov_proekt"><NavLink to='/create' id="kreiraj_proekt">Додај поставка</NavLink></li>

        <li id="odjava1"><a onClick={props.signOut}>Одјава</a></li>
        <li id="licen_profil"><NavLink to='/' className="btn btn-floating green lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)