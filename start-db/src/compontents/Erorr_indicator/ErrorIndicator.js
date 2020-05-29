import React from "react";

import './ErrorIndicator.css'
import Icon from './death-star.png'

 const ErrorIndicator = () => {




        return(
            <div className="Error_indicator">
                <img src={Icon} alt="error icon"/>
                <span className="Boom">BOOM!</span>
                <span>
                    something has gone terribly wrong
                </span>
                <span>
                    (but already sent droids to fix it)
                </span>
            </div>
        )

}

export default ErrorIndicator
