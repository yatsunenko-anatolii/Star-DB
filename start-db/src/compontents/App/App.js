import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Header'
import RandomPlanet from  '../Random_Planet'
import { PeoplePage, StarshipsPage, PlanetsPage } from '../pages'
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
            <Router>
                  <div className="App container ">
                      <Header />
                      <RandomPlanet />

                      <Route path="/people" component={PeoplePage} />
                      <Route path="/planets" component={PlanetsPage} />
                      <Route path="/starships" component={StarshipsPage} />
                  </div>
            </Router>
        </SwapiServiceProvider>
    )
  }
}