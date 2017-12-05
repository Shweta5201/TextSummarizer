import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
      <nav className = "navbar navbar-inverse">
      <div className = "container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Sentient</a>
        </div>



          <ul className="nav navbar-nav navbar-right">



          </ul>

          </div>
        </nav>

      </div>
    );
  }
}

export default Header;
