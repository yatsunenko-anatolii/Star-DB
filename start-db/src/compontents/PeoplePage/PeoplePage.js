import React, {Component} from "react";

import {PersonList} from "../sw_components/ItemList";
import ItemDetails from "../Item_details";
import RowGrid from "../Row_Grid_Pattern";
import Record from "../Record/Record";

import SwapiService from "../../services/swapi_service";

import './People_Page.css'
import {PersonDetails} from "../sw_components/details";




export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: null
    }


    onPersonSelected = (id) => {

        this.setState({
            selectedPerson: id
        })
    }


    render() {

        const itemList = (
            <PersonList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>

               {(i) => (
                `${i.name}( ${i.birthYear})`
            )
            }
            </PersonList>
        )

        const personDetails = <PersonDetails itemId={this.state.selectedPerson} />

        return <RowGrid left={itemList} right={personDetails}/>

    }
}