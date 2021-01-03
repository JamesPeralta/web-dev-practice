import React from "react";

function ProductElement(props) {
    const myStyles = {
        position: "absolute",
        borderStyle: "solid",
        borderColor: "black",
        top: 65,
        left: 325,
        width: 600,
        height: 500
    }

    const modal = (
        <div style={myStyles}>
            <h1 style={{color: "black"}}>{props.item}</h1>
        </div>
    )

    return (
        <div className="myListItem">
            <p>{props.item}</p>
            <p className="carot">╲╱</p>
            {props.item === props.openModal ? modal: null}
        </div>
    )
}

export default ProductElement;