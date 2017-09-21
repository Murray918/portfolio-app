import React, { Component } from 'react';

export default class Refs extends Component {
  render() {
    return (
          <div className="jumbotron">
            <h1> Contacts</h1>
            <div className="card" >
              <div>
                <ul className="list-group">
                  <li className="list-group-item">MikeAngelo Dawkins</li>
                  <li className="list-group-item list-group-item-primary">512-555-5555</li>
                  <li className="list-group-item list-group-item-secondary">Austin Texas</li>
                </ul>
              </div>
            </div>
            <div className="card" >
              <div>
                <ul className="list-group">
                  <li className="list-group-item">Mertyl Srumloggins</li>
                  <li className="list-group-item list-group-item-primary">512-555-5555</li>
                  <li className="list-group-item list-group-item-secondary">Havana Georgia</li>
                </ul>
              </div>
            </div>
          </div>
    )
  }
}
