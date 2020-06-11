import React from "react";

import ItemList from "../Item_List/Item_List";
import {
    withData, 
    withSwapiService, 
    withChildFuntion,
    compose
  }  from '../hoc-element'



const renderName = ({ name }) => <span>{name}</span>


const mapPersonMethodsProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = compose (
                            withSwapiService(mapPersonMethodsProps),
                            withData,
                            withChildFuntion(renderName)
                        )(ItemList)

                                    
const PlanetList  = compose (
                            withSwapiService(mapPlanetMethodsProps),
                            withData,
                            withChildFuntion(renderName)
                        )(ItemList)


const StarshipList = compose (
                            withSwapiService(mapStarshipMethodsProps),
                            withData,
                            withChildFuntion(renderName)
                        )(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}
