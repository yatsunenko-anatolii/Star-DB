import React, {Component} from 'react'


import './Item_List.css'


export default class ItemList extends Component {


  render() {
    
    return (
      <div className="Item_list"> 
        <ul>
          <li>
            <span>Skyworker</span>
          </li>
          <li>
            <span>Luke</span>
          </li>
          <li>
            <span>Fredly</span>
          </li>
        </ul>
      </div>
    )
  }
}