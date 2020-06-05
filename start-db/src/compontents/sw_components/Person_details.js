import React from "react";

import ItemDetails from "../Item_details";
import Record from "../Record";

import { withSwapiService } from '../hoc-element'


const PersonDetails = (props) => {

    return (
        <ItemDetails {...props} >


            <Record field='gender' label='Gender:'/>
            <Record field='eyeColor' label='Eye Color: '/>
            <Record field='birthYear' label='Birth Year: '/>
            <Record field='skinColor' label='Skin Color: '/>
        </ItemDetails>

    )
}


const mapMethodsToProps = (swapiService) => {

    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }

}

export default withSwapiService(mapMethodsToProps)(PersonDetails)