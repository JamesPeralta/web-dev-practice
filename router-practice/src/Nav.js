import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    const removeUnd = {
        textDecoration: "none",
    }

    return (
        <nav>
            <ul style={{
                listStyle: "none",
                display: "flex",
                margin: 0,
                padding: 0
            }}>
                <li><Link to="/home" style={removeUnd}><NavTab name="Home"/></Link></li>
                <li><Link to="/about" style={removeUnd}><NavTab name="About"/></Link></li>
                <li><Link to="/contactme" style={removeUnd}><NavTab name="Contact Me"/></Link></li>
                <li><Link to="/resume" style={removeUnd}><NavTab name="Resume"/></Link></li>
            </ul>
        </nav>
    )
}

function NavTab(props) {
    return (
        <div style={{
            color: "black",
            borderStyle: "solid",
        }}>
            <h1 style={{
                padding: "0px 10px"
            }}>{props.name}</h1>
        </div>
    )
}

export default Nav;