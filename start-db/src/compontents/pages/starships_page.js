import React, {Component} from "react";

import RowGrid from "../Row_Grid_Pattern";
import { StarshipDetails, StarshipList} from "../sw_components";

export default class StarshipsPage extends Component{

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
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItem}/>}   />
        )
    }

}