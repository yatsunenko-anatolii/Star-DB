import React from "react";
import {withRouter} from 'react-router-dom'
import RowGrid from "../Row_Grid_Pattern";
import { PersonDetails, PersonList } from "../sw_components";

const  PeoplePage = ({history, match}) => {

    const {id} = match.params
        return (
            <RowGrid
                    left={<PersonList onItemSelected={(id) => history.push(id)}/>}
                     right={<PersonDetails itemId={id}/>}/>
        )


}

export default withRouter(PeoplePage)