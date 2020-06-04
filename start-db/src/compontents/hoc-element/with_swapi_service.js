import React from "react";

import { SwapiServiceConsumer } from "../swapi_service_contex";

const withSwapiService = (Wrapped, mapMethodToProps) => {

    return (props) => {

       return (
           <SwapiServiceConsumer>
                {
                    (swapiService) => {

                        const serviceProps = mapMethodToProps(swapiService)

                        return (
                            <Wrapped {...props} {...serviceProps}/>
                        )
                    }
                }
             </SwapiServiceConsumer>
       )
    }
}




export default withSwapiService