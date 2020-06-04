import React from "react";
import ItemList from "../Item_List/Item_List";
import {withData} from '../hoc-element'
import SwapiService from "../../services/swapi_service";

const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService


const PersonList = withData(ItemList, getAllPeople)

const PlanetList  = withData(ItemList, getAllPlanets)

const StarshipList = withData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}
