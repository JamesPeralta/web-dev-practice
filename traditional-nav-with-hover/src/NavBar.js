import React, {useState} from "react";
import "./NavBar.css";

function NavBar() {
    const navItems = ["Home", "About", "Resume", "Contact"];
    const [hoveredElem, setHoveredElem] = useState("");

    const handleMouseOver = (name) => {
        setHoveredElem(name);
    }

    const handleMouseOut = () => {
        setHoveredElem("");
    }

    return (
        <nav className="nav-bar">
            <ul>
                {navItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavItem name={item} hoveredItem={hoveredElem}
                                     handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut}
                            />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

function NavItem(props){
    const subItems = (
        <ul style={{position: "absolute", color: "black", top: 36, right: 19, listStyle: "none", padding: 0, margin: 0}}>
            <li>More 1</li>
            <li>More 2</li>
            <li>More 3</li>
            <li>More 4</li>
            <li>More 5</li>
            <li>More 6</li>
        </ul>
    );

    return (
        <div
            className="nav-item"
            style={props.hoveredItem === props.name ? {backgroundColor: "red", position: "relative"} : {position: "relative"}}
            onMouseOver={() => props.handleMouseOver(props.name)}
            onMouseOut={props.handleMouseOut}
        >
            <p>{props.name}</p>
            {props.hoveredItem === props.name ? subItems : null}
        </div>
    )
}

export default NavBar;