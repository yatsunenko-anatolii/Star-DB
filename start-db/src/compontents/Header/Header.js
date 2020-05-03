import React, { Component } from 'react'


import './Header.css'


export default class Header extends Component {


  render() {
    return (
      <div className="Header d-flex">
        <div className="Header_logo">
          <h3>
            <a href="#">Star DB</a>
          </h3>
        </div>
        <div className="Header_list">
          <ul className="d-flex">
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">Planets</a>
            </li>
            <li>
              <a href="#">Starships</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}