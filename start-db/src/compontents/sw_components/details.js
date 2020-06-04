import React from "react";

import ItemDetails from "../Item_details";
import Record from "../Record";

import SwapiService from "../../services/swapi_service";

const swapiService = new SwapiService()

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPerson}
                     getImgUrl={getPersonImage} >


            <Record field='gender' label='Gender:'/>
            <Record field='eyeColor' label='Eye Color: '/>
            <Record field='birthYear' label='Birth Year: '/>
            <Record field='skinColor' label='Skin Color: '/>
        </ItemDetails>
    )
}

const PlanetDetails = ({ itemId }) => {

    return (
        <ItemDetails itemId={itemId}
                     getData={getPlanet}
                     getImgUrl={getPlanetImage} >


            <Record field='name' label='Name:'/>
            <Record field='population' label='Population: '/>
            <Record field='diameter' label='Diameter Planet: '/>

        </ItemDetails>
    )
}

const StarshipDetails = ({ itemId }) => {

    return (
        <ItemDetails itemId={itemId}
                     getData={getStarship}
                     getImgUrl={getStarshipImage} >


            <Record field='name' label='Name:'/>
            <Record field='model' label='Model: '/>
            <Record field='crew' label='Crew: '/>

        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}