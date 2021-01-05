import React from "react";
import ProductModal from "./components/ProductModal";

function ProductElement(props) {
    const {hoverIn, hoverOut} = props.handlers;

    return (
        <div className="myListItem" style={{
            color: props.item === props.hoveredModal ? "grey" : "white"
        }} onMouseOver={() => hoverIn(props.item)} onMouseOut={() => hoverOut(props.item)}>
            <p>{props.item}</p>
            <p className="carot">╲╱</p>
            {props.item === props.openModal ? <ProductModal item={props.item}/>: null}
        </div>
    )
}

export default ProductElement;