import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right" id="signout1">
      <li id="nov_proekt"><NavLink to='/pochetna'>Почетна</NavLink></li>
      <li id="nov_proekt"><NavLink to='/home'>Акции</NavLink></li>
      <li id="nov_proekt"><NavLink to='/promocii' id="kreiraj_proekt">Промоции</NavLink></li>
        <li><NavLink to='/signup'>Регистрација</NavLink></li>
        <li><NavLink to='/signin'>Најава</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks