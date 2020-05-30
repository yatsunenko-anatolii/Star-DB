import React, {Component} from 'react'

import Spinner from "../Spinner";
import SwapiService from "../../services/swapi_service";

import './Item_List.css'


export default class ItemList extends Component {

  swapiService = new SwapiService()

  state = {
     peopleList: null
  }

  componentDidMount() {
    this.swapiService
        .getAllPeople()
        .then((peopleList) => {
          this.setState({
              peopleList
          })
        })
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
          <li
              key={id}
              onClick={() => this.props.onItemSelected(id)}>
            {name}
          </li>
      )
    })
  }


  render() {

    const { peopleList} = this.state

    if(!peopleList) {
      return < Spinner />
    }

    const items = this.renderItems(peopleList)

    return (
      <div className="Item_list"> 
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}