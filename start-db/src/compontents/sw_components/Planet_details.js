import React from "react";

import ItemDetails from "../Item_details";
import Record from "../Record";

import {withSwapiService} from '../hoc-element'

const PlanetDetails = ({ props }) => {

    return (
        <ItemDetails {...props} >


            <Record field='name' label='Name:'/>
            <Record field='population' label='Population: '/>
            <Record field='diameter' label='Diameter Planet: '/>

        </ItemDetails>
    )

}

const mapMethodsToProps = (swapiService) => {

    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }

}

export default withSwapiService(mapMethodsToProps)(PlanetDetails)

