import React, { Component } from 'react'
import {Link} from "react-router-dom";

import './Header.css'


export default class Header extends Component {


  render() {
    return (
      <div className="Header d-flex">
        <div className="Header_logo">
          <h3>
            <Link to="/">Star DB</Link>
          </h3>
        </div>
        <div className="Header_list">
          <ul className="d-flex">
            <li>
              <Link to="/people/" >People</Link>
            </li>
            <li>
              <Link to="/planets/" >Planets</Link>
            </li>
            <li>
              <Link to="/starships/" >Starships</Link>
            </li>
            <li>
              <Link to="/login" >Login</Link>
            </li>
            <li>
              <Link to="/secret" >Secret</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}