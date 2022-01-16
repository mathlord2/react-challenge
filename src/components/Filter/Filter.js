import React from "react";
import {GENRES, STATUSES, RATINGS} from "./FilterVars";

import Dropdown from "./Dropdown";

const Filter = props => {
    return (
        <>
            <h4 style={{marginTop: "20px"}}>Filters</h4>
            <div className="inline">
                <Dropdown items={GENRES} value={props.genre.name}
                    default="Genre" setValue={props.changeGenre}/>
                <Dropdown items={STATUSES} value={props.status.name}
                    default="Status" setValue={props.changeStatus}/>
                <Dropdown items={RATINGS} value={props.rated.name}
                    default="Rated" setValue={props.changeRated}/>
            </div>
        </>
    );
}

export default Filter;