import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import AboutMe from './components/pages/aboutMe';
import MyProjects from './components/pages/myProjects';
import './Assets/css/default.min.css';
import './Assets/css/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="paddingTopClass">
          <Route exact path='/' component={AboutMe}/>
          <Route exact path='/aboutme' component={AboutMe}/>
          <Route exact path='/myprojects' component={AboutMe}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
