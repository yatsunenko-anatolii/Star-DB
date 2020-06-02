import React, {Component} from 'react'

import Header from '../Header'
import RandomPlanet from  '../Random_Planet'
import PeoplePage from "../PeoplePage";


import './App.css'



export default class App extends Component {


    render() {

    return (
      <div className="App container ">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    )
  }
}