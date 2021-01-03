import React from "react";
import ProductElement from "./ProductElement";
import "./ProductList.css";

function ProductList(props) {
    return (
        <div>
            <ul className="products-list">
                {props.products.map(item => (
                    <li onClick={() => props.handleClick(item)}><ProductElement item={item} openModal={props.openModel}/></li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList