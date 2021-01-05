import React from "react";
import "./ProductModal.css";
import ProductDescription from "./ProductDescription";

const products = {
    bike: {
        name: "Bike",
        description: "The original heart pumping cardio experience",
        imgSrc: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:best,w_130/https://images.ctfassets.net/6jnflt57iyzx/22WRDq9TOde8eYX2Qo1xNR/fe8e639f0f1fa1a035e14f46d57a1791/Bike_Render.png"
    },
    bikePlus: {
        name: "Bike+",
        description: "The ultimate cardio + strength experience",
        imgSrc: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:best,w_130/https://images.ctfassets.net/6jnflt57iyzx/7kyC1eyb9ovbqpt1HE1qWN/62a860db7b6e84044b2596faca55ba54/Bike_Plus.png"
    }
}

const categories = {
    bikes: [products.bike, products.bikePlus]
}


function ProductModal({item}) {
    const myStyles = {
        position: "absolute",
        top: 65,
        left: 325,
        width: 700,
        height: 500,
    }

    const toRender = [products.bike, products.bikePlus];
    return (
        <div style={myStyles} className="product-modal">
            <div className="left-panel">
                {toRender.map((elem, index) => (<ProductDescription key={index} data={elem}/>))}
            </div>
            <div className="right-panel">
            </div>
        </div>
    )
}

export default ProductModal;