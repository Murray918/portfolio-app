
import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Welcome To React Router!</h1>
        <p className="lead">Here I am making a mock portfolio.</p>
        <hr className="my-4"></hr>
        <p>It is built on React with react router and uses Bootstrap for styling.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/home" role="button">Check it out!</a>
        </p>
      </div>
    );
  }
}
