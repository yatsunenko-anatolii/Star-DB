import React, {Component} from "react";



import ItemList from "../Item_List";
import PersonDetails from "../Person_details";

import './People_Page.css'


export default class People_Page extends Component{

    state = {
        selectedPerson: null
    }


    onPersonSelected = (id) => {

        this.setState({
            selectedPerson: id
        })
    }


    render() {

        return(
            <div className="App_list_item row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }

}