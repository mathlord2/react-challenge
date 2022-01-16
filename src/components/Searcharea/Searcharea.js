import React from "react";
import {COLORS, SHADOW} from "../../styleVars";

import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "./Searcharea.css";

const Searcharea = props => {
    return (
        <div className="inline">
            <div style={{margin: "0px 10px"}}>
                <FaSearch className="search"/>
                <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} style={{
                    padding: "10px",
                    paddingLeft: "35px",
                    border: "3px solid " + COLORS.primary,
                    borderRadius: "15px",
                    textAlign: "left",
                    width: "30vh",
                    boxShadow: SHADOW.primary
                }}/>
            </div>

            <button onClick={props.onClick} style={{
                borderRadius: "20px",
                backgroundColor: COLORS.primary,
                boxShadow: SHADOW.primary,
                color: "white",
                padding: "10px 20px",
                border: "none"
            }}>
                <FaArrowRight/>
            </button>
        </div>
    );
}

export default Searcharea;