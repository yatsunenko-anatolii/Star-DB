import React, {Component} from 'react'

import SwapiService from "../../services/swapi_service";
import Spinner from "../Spinner";
import './Person_details.css'


export default class PersonDetails extends Component {

  swapiService = new SwapiService()

  state = {
    person: null
  }

  componentDidMount() {
    this.upDatePerson()
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.upDatePerson()
    }
  }

  upDatePerson() {
    const { personId} = this.props

    if(!personId) {
      return;
    }

    this.swapiService
        .getPerson(personId)
        .then((person) => {
          this.setState({
            person
          })
        })
  }



  render() {

    if (!this.state.person) {

      return (
          <div className="Person_details_spinner">
            <h4>Please, Select a person from a list!</h4>
            <Spinner />
          </div>
      )
    }

    const {  id, name , gender, birthYear, eyeColor, skinColor }  = this.state.person



    return (
      <div className="Person_details">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="Person_details_img" alt="Air Space" title="AirSpace"></img>
        
        <div className="Person_details_list">
          <h4><span>{name}</span></h4>
          <ul>
            <li>
              <span>Gender: </span>
              <span>{gender} </span>
            </li>
            <li>
              <span>Birth Year: </span>
              <span>{birthYear}</span>
            </li>
            <li>
              <span>Eye Color: </span>
              <span>{eyeColor}</span>
            </li>
            <li>
              <span>Skin Color: </span>
              <span>{skinColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}