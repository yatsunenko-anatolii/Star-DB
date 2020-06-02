import React, {Component} from 'react'


import Spinner from "../Spinner";
import './Item_details.css'


export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  }

  componentDidMount() {
    this.upDatePerson()
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.upDatePerson()
    }
  }

  upDatePerson() {
    const { itemId, getData, getImgUrl} = this.props

    if(!itemId) {
      return;
    }

    getData(itemId)
        .then((item) => {
          this.setState({
            item,
            image: getImgUrl(item)
          })
        })
  }



  render() {

    const { item, image } =this.state

    if (!item) {

      return (
          <div className="Person_details_spinner">
            <h4>Please, Select a person from a list!</h4>
            <Spinner />
          </div>
      )
    }

    const { name }  = this.state.item

    return (
      <div className="Person_details">
        <img src={image} className="Person_details_img" alt="Air Space" title="AirSpace"></img>
        
        <div className="Person_details_list">
          <h4><span>{name}</span></h4>
          <ul>
            {
              React.Children.map(this.props.children, (child) => {

                return React.cloneElement(child, { item })
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}