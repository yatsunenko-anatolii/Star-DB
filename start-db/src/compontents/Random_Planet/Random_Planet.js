import React, { Component } from 'react'

import Spinner from "../Spinner"

import SwapiService from  '../../services/swapi_service'
import './Random_Planet.css'
import {render} from "react-dom";


export default class RandomPlanet extends Component {

  swapiService = new SwapiService()


  state = {
    planet: {},
    loading: true
  }

  constructor() {
    super();
    this.updatePlanet()
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2

    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)

  }


  render() {

    const {planet, loading} = this.state
    const spinner = loading ? < Spinner /> : null
    const content = !loading ? < PlanetView planet={planet}/> : null

    return ( 
      <div className="Random_planet d-flex">
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {

  const  { id, planetName,population,
            rotationPeriod, diameter }  = planet


  return (
      <React.Fragment>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="Random_planer_img" alt="Air Spaxe" title="AirSpace"></img>

        <div className="Random_planet_list">
          <h4>{planetName}</h4>
          <ul>
            <li className="planet_list--item">
              <span className="term">Population: </span>
              <span>{population}</span>
            </li>
            <li className="planet_list--item">
              <span className="term">Rotation Period: </span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="planet_list--item">
              <span className="term">Diameter: </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
  )
}


