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
              <li className="first">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutme">About Me</Link>
              </li>
              <li>
                <Link to="/myProjects">Projects</Link>
              </li>
              <li className="last">
                <Link to="/contact">Contact</Link>
              </li>
          </ul>

          </div>
        </nav>

      </div>
    );
  }
}

export default Header;
