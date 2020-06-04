import React, {Component} from "react";

import {PersonList} from "../sw_components/ItemList";
import RowGrid from "../Row_Grid_Pattern";

import { SwapiServiceConsumer } from "../swapi_service_contex";
import SwapiService from "../../services/swapi_service";

import './People_Page.css'
import {PersonDetails} from '../sw_components'




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
            <SwapiServiceConsumer>
                {
                    ({ getAllPeople }) => {

                        return (
                            <PersonList onItemSelected={this.onPersonSelected}
                                    getData={ getAllPeople }>

                                    {(i) => (
                                        `${i.name}( ${i.birthYear})`
                                    )
                                    }
                            </PersonList>
                    )
                }
                }
            </SwapiServiceConsumer>

        )

        const personDetails = <PersonDetails itemId={this.state.selectedPerson} />

        return <RowGrid left={itemList} right={personDetails}/>

    }
}