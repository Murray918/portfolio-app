import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/">Splash</NavLink>
              </li>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/refrences">Refrences</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className='container-fluid'>
          {this.props.children}
        </div>

        <footer className="col-lg-11">
          <span className="footer-title">by Andrew Murray
          </span>
        </footer>
      </div>

    )

  }
}
