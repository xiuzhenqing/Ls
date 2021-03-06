import React, { Component } from 'react';
import logo from './imgs/logo.png';
import './App.css';
import Home from './Home';
import Wl_intro from './Intro';
import Wl_Recruit from './Recruit';
import Anli from './Anli';
import Team from './Team';
import State from './State';
import Footer from './Footer';
import Territory from './Territory';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const BasicExample = () => (
  <Router>
  <div className="box">
    <div className="x-header clear">

    <div className="left x-logob">
      <Link to="/"><img src={logo} alt="logo" className="x-logo"/></Link>

    </div>

      <ul className="x-nav right">
        <li className="san"><span className="right"></span><Link to="/intro">介绍</Link></li>
        <li><Link to="/Territory">领域</Link></li>
        <li><Link to="/Team">团队</Link></li>
        <li><Link to="/Anli">案例</Link></li>
        <li><Link to="/State">动态</Link></li>
        <li><Link to="/recruit">招贤纳士</Link></li>
      </ul>
    </div> 
     <Route exact path="/" component={Home}/>
     <Route exact path="/Intro" component={Wl_intro}/>
     <Route exact path="/Team" component={Team}/>  
     <Route exact path="/Anli" component={Anli}/>
     <Route exact path="/State" component={State}/>
     <Route exact path="/Recruit" component={Wl_Recruit}/>  
     <Route exact path="/Territory" component={Territory}/>  

    </div>
  </Router>
)

export default BasicExample;
