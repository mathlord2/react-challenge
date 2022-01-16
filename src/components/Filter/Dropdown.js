import React from "react";
import {COLORS, SHADOW} from "../../styleVars";

import {Menu, Dropdown as Drop} from "antd";
import {BiCaretDown} from "react-icons/bi";

const Dropdown = props => {
    const menu = (
        <Menu>
            {props.items.map(item => (
                <Menu.Item onClick={() => props.setValue(item)} key={item.value}>
                    {item.name}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Drop overlay={menu}>
            <div style={{
                padding: "10px",
                border: "3px solid " + COLORS.primary,
                borderRadius: "15px",
                textAlign: "left",
                margin: "0px 10px",
                marginBottom: "20px",
                boxShadow: SHADOW.primary
            }}>
                {!props.value ? props.default : props.value}
                <BiCaretDown size={20} style={{marginLeft: "5px"}}/>
            </div>
        </Drop>
    );
}

export default Dropdown;