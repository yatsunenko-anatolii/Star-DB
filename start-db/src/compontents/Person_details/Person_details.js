import React, {Component} from 'react'


import './Person_details.css'


export default class PersonDetails extends Component {


  render() {
    
    return (
      <div className="Person_details">
        <img src={`https://i.pinimg.com/236x/4e/1f/a8/4e1fa89e64b2d3808706d641b6a90b64.jpg`} className="Person_details_img" alt="Air Spaxe" title="AirSpace"></img>
        
        <div className="Person_details_list">
          <h4><span>R2-D2</span></h4>
          <ul>
            <li>
              <span>Gender </span><span>male</span>
            </li>
            <li>
              <span>Birth Year </span><span>43</span>
            </li>
            <li>
              <span>Eye</span><span>Colorred</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}