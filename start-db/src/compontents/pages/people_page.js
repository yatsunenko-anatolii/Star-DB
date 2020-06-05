import React, {Component} from "react";

import RowGrid from "../Row_Grid_Pattern";
import { PersonDetails, PersonList } from "../sw_components";

export default class PeoplePage extends Component{

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }


  render() {

        const { selectedItem } = this.state
        return (
            <RowGrid
                    left={<PersonList onItemSelected={this.onItemSelected}/>}
                     right={<PersonDetails itemId={selectedItem}/>}   />
        )
}

}