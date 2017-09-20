import React, {Component} from 'react'
import sc1 from '../images/PARTY.png';
import sc2 from '../images/mini-corn-dog.jpeg';
import sc3 from '../images/Confetti.jpg';


  export default class Portfolio extends Component {
    render() {
      let imgStyle = {
        height: 300,
        padding: 10
      };
      return (
        <div className='container-fluid'>
          <div className="jumbotron">
            <h1 className="display-3">Portfolio</h1>
            <p className="lead">Some of my projects...</p>
            <hr className="my-4"></hr>
            <img src={sc1} style={imgStyle} alt='hi'></img>
            <img src={sc2} style={imgStyle} alt='hi'></img>
            <img src={sc3} style={imgStyle} alt='hi'></img>
            <p className="lead">
              <a className="btn btn-success" href="#" role="button">See more</a>
            </p>
          </div>
        </div>
      );
    }
  }
