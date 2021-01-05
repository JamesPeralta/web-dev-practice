import React from "react";
import ProductElement from "./ProductElement";
import "./ProductList.css";

function ProductList(props) {
    return (
        <div>
            <ul className="products-list">
                {props.products.map((item, index) => (
                    <li key={index} onClick={() => props.handlers.clickHandler(item)}>
                        <ProductElement
                            item={item}
                            openModal={props.openModel}
                            handlers={props.handlers}
                            hoveredModal={props.hoveredModal}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList