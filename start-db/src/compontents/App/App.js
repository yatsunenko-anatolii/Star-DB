import React, {Component} from 'react'

import Header from '../Header'
import RandomPlanet from  '../Random_Planet'
import {PeoplePage} from '../pages'
import { SwapiServiceProvider } from "../swapi_service_contex";

import './App.css'
import SwapiService from "../../services/swapi_service";



export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    }

    render() {

    return (
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="App container ">
              <Header />
              <RandomPlanet />
              <PeoplePage/>
          </div>
        </SwapiServiceProvider>
    )
  }
}