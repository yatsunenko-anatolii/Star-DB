import React, {Component} from 'react'

import Header from '../Header'
import RandomPlanet from  '../Random_Planet'
import ItemList from '../Item_List'
import PersonDetails from '../Person_details'



import './App.css'


export default class App extends Component {


    render() {

    return (
      <div className="App container ">
        <Header />
        <RandomPlanet />

        <div className="App_list_item row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
          
        </div>
      </div>
    )
  }
}