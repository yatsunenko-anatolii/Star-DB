import React, {Component} from "react";



import ItemList from "../Item_List";
import ItemDetails from "../Item_details";
import RowGrid from "../Row_Grid_Pattern";
import Record from "../Record/Record";

import SwapiService from "../../services/swapi_service";

import './People_Page.css'



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
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>

               {(i) => (
                `${i.name}( ${i.birthYear})`
            )
            }
            </ItemList>
        )

        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}
                         getData={this.swapiService.getPerson}
                         getImgUrl={this.swapiService.getPersonImage} >


                <Record field='gender' label='Gender:'/>
                <Record field='eyeColor' label='Eye Color: '/>
                <Record field='birthYear' label='Birth Year: '/>
                <Record field='skinColor' label='Skin Color: '/>
            </ItemDetails>
        )

        return <RowGrid left={itemList} right={personDetails}/>

    }
}