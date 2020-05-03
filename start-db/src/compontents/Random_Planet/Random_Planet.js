import React, { Component } from 'react'


import './Random_Planet.css'


export default class RandomPlanet extends Component {


  render() {
    
    return ( 
      <div className="Random_planet d-flex">
        <img src={`https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`} className="Random_planer_img" alt="Air Spaxe" title="AirSpace"></img>
        
        <div className="Random_planet_list">
          <h4>Planet Name</h4>
          <ul>
            <li>
              Population: <span>123124</span>
            </li>
            <li>
              Rotation Period: <span>34</span>
            </li>
            <li>
              Diameter: <span>123124</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}