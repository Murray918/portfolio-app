import React, {Component} from 'react';

export default class Contacts extends Component {
  render() {

    return (
      <div className="jumbotron row">
        <h1>Contact Me</h1>
        <div className="list-group col contact-links">
          <a href="#" className="list-group-item list-group-item-action contact-links">Dapibus ac facilisis in</a>
          <a href="#" className="list-group-item list-group-item-action contact-links">This is a primary list group item</a>
          <a href="#" className="list-group-item list-group-item-action contact-links">This is a secondary list group item</a>
          <a href="#" className="list-group-item list-group-item-action contact-links">This is a success list group item</a>
          <a href="#" className="list-group-item list-group-item-action contact-links">This is a danger list group item</a>

        </div>
        <div className = "">

        </div>

      </div>
    )
  }
}
