import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
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
