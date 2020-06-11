import React from "react";

import ItemDetails from "../Item_details";
import Record from "../Record";
import {withSwapiService} from "../hoc-element";





const StarshipDetails = (props) => {

    return (
        <ItemDetails {...props} >

            <Record field='name' label='Name:'/>
            <Record field='model' label='Model: '/>
            <Record field='crew' label='Crew: '/>

        </ItemDetails>
    )

}

const mapMethodsToProps = (swapiService) => {

    return {
        getData: swapiService.getStarship,
        getImgUrl: swapiService.getStarshipImage
    }

}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)