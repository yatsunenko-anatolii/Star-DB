import React from "react";

import ItemList from "../Item_List/Item_List";
import {withData, withSwapiService} from '../hoc-element'




const withChildFuntion = (Wrapped, fun) => {

    return (props) => {
        return (
            <Wrapped {...props}>
                {fun}
            </Wrapped>
        )
    }
}

const ListWithChildren = withChildFuntion(
    ItemList,
    ({ name }) => <span>{name}</span>
)

const mapPersonMethodsProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapStarshipMethodsProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const PersonList = withSwapiService(
                                    withData(ListWithChildren),
                                    mapPersonMethodsProps)

const PlanetList  = withSwapiService(
                                    withData(ListWithChildren),
                                    mapPlanetMethodsProps)

const StarshipList = withSwapiService(
                                    withData(ListWithChildren),
                                    mapStarshipMethodsProps)

export {
    PersonList,
    PlanetList,
    StarshipList
}
