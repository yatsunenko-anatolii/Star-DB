import React, {Component} from 'react'

import Spinner from "../Spinner";
import SwapiService from "../../services/swapi_service";

import './Item_List.css'


export default class ItemList extends Component {



  state = {
     itemList: null
  }

  componentDidMount() {

      const {getData} = this.props

    getData()
        .then((itemList) => {
          this.setState({
              itemList
          })
        })
  }

  renderItems(arr) {
    return arr.map((item) => {

        const {id} = item
        const label = this.props.children(item)

      return (
          <li
              key={id}
              onClick={() => this.props.onItemSelected(id)}>
            {label}
          </li>
      )
    })
  }


  render() {

    const { itemList} = this.state

    if(!itemList) {
      return < Spinner />
    }

    const items = this.renderItems(itemList)

    return (
      <div className="Item_list"> 
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}