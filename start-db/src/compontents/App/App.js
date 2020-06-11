import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../Header'
import RandomPlanet from  '../Random_Planet'
import {
    PeoplePage,
    StarshipsPage,
    PlanetsPage,
    SecretPage,
    LoginPage} from '../pages'

import { SwapiServiceProvider } from "../swapi_service_contex";

import './App.css'
import SwapiService from "../../services/swapi_service";
import StarshipDetails from "../sw_components/Starship_details";



export default class App extends Component {


    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
     this.setState({
         isLoggedIn: true
     })
    }

    render() {

    const {isLoggedIn} = this.state

    return (
        <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
                  <div className="App container ">
                      <Header />
                      <RandomPlanet />
                      <Route path="/"
                              exact
                              render={() => {
                                 return (
                                     <div className="sk-cube-grid">
                                      <div className="sk-cube sk-cube1"></div>
                                      <div className="sk-cube sk-cube2"></div>
                                      <div className="sk-cube sk-cube3"></div>
                                      <div className="sk-cube sk-cube4"></div>
                                      <div className="sk-cube sk-cube5"></div>
                                      <div className="sk-cube sk-cube6"></div>
                                      <div className="sk-cube sk-cube7"></div>
                                      <div className="sk-cube sk-cube8"></div>
                                      <div className="sk-cube sk-cube9"></div>
                                  </div>
                                 )
                              }} />
                      <Route path="/"
                             render={() => <h2 className="App_intro" >Welcom to StarDB !</h2>}
                             exact={true}/>
                      <Route path="/people/:id?" component={PeoplePage} />
                      <Route path="/planets" component={PlanetsPage} />
                      <Route path="/starships" exact component={StarshipsPage} />
                      <Route path="/starships/:id"
                             render={({match}) => {
                                 const { id } = match.params
                                 return <StarshipDetails itemId={id}/>
                             }}/>
                       <Route path="/login"
                              render={() => {
                                return  <LoginPage
                                                    isLoggedIn={isLoggedIn}
                                                    onLogin={this.onLogin}/>
                              }}/>
                       <Route path="/secret"
                              render={() => {
                                  return  <SecretPage isLoggedIn={isLoggedIn}/>
                              }}/>
                  </div>
            </Router>
        </SwapiServiceProvider>
    )
  }
}