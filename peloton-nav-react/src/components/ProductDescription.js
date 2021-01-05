import React from "react";
import "./ProductDescription.css";

function ProductDescription(props) {
    const {name, description, imgSrc} = props.data;

    return (
        <div className="product-desc">
            <img src={imgSrc}/>
            <div>
                <h6>PELOTON {name.toUpperCase()}</h6>
                <p>{description}</p>
                <a href="#">Explore</a>
                <a id="shop-link" href="#">Shop {name}</a>
            </div>
        </div>
    )
}

export default ProductDescription;