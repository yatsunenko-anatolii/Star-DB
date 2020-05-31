import React, {Component} from 'react'

import Header from '../Header'
import RandomPlanet from  '../Random_Planet'
import People_Page from "../PeoplePage";
import ItemList from '../Item_List'
import PersonDetails from '../Person_details'



import './App.css'


export default class App extends Component {


    render() {

    return (
      <div className="App container ">
        <Header />
        <RandomPlanet />
        <People_Page/>
      </div>
    )
  }
}