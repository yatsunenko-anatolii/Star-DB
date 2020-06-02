import React from "react";

import './Record.css'

const Record = ({item, field, label}) => {

    return (
        <li>
            <span>{label} </span>
            <span>{item[field]}</span>
        </li>
    )
}

export default Record