import Home from './components/doma/Home'

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Naslovna from './components/dashboard/Naslovna'
import DetaliProekt from './components/projects/DetaliProekt'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import About from './components/zanas/About'
import KreirajProekt from './components/projects/KreirajProekt'
import Pochetna from './components/pochetna/Pochetna'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Naslovna} />
            <Route path='/project/:id' component={DetaliProekt} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={KreirajProekt} />
            <Route path='/promocii' component={About} />
            <Route path='/home' component={Home} />
            <Route path='/pochetna' component={Pochetna} />
         
  
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }}

export default App;
