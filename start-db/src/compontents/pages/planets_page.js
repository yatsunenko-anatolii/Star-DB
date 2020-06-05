import React, {Component} from "react";

import RowGrid from "../Row_Grid_Pattern";
import { PlanetDetails, PlanetList} from "../sw_components";

export default class PlanetsPage extends Component{

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
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={selectedItem}/>}   />
        )
    }

}