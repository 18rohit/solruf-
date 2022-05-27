import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Switch from 'react-switch'
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup'
import LandingPage from './screens/LandingPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="app">
      <Header/>
      <Router>
          <Switch>
            <Route path='/signup' exact><Signup/></Route>
            <Route path='/' exact><LandingPage/></Route>
            <Route path='/login' exact><Login/></Route>   
          </Switch> 
        </Router>                                                   
    </div>
);


