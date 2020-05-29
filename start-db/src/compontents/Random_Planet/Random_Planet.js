import React, { Component } from 'react'

import Spinner from "../Spinner"
import ErorrIndicator from "../Erorr_indicator";

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
      loading: false,
      error: false
    })
  }

  onError = (err) => {
        this.setState({
          error: true,
          loading: false
        })
    }


  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2

    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
  }

  render() {

    const {planet, loading, error} = this.state

    const hasData = !(loading || error)

    const errorMessage = error ? < ErorrIndicator /> : null
    const spinner = loading ? < Spinner /> : null
    const content = hasData ? < PlanetView planet={planet}/> : null

    return ( 
      <div className="Random_planet d-flex">
        {errorMessage}
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


