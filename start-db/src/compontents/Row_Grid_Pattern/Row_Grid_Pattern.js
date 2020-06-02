import React from "react";

import './Row_Grid_Pattern.css'


const RowGrid= ({ left ,right }) => {
    return (
        <div className="App_list_item row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}

export  default RowGrid