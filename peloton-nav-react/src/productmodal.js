import React from "react";
import "./productmodal.css"

function ProductList(props) {
    return (
        <div>
            <ul className="products-list">
                {props.products.map(item => (
                    <li key={item}>
                        <p>{item}</p>
                        <p className="carot">╲╱</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList