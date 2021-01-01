import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from "./productmodal";

ReactDOM.render(
    <div>
        <PelotonNav/>
    </div>,
    document.getElementById('root')
);

function PelotonNav(props) {
    let products = ["BIKES", "TREAD", "APP", "CLASSES", "ACCESSORIES", "APPAREL"];

    return (
        <div className="peloton-nav">
            <Logo/>
            <ProductList products={products}/>
            <OtherItems/>
        </div>
    );
}

function Logo(props) {
    return (
        <div className="logo">
            <img src="./peloton-logo.svg" alt="peloton"/>
        </div>
    );
}

function OtherItems(props) {
    return (
        <div>
            <ul className="other-items">
                <li><img src="./location.svg" alt="#"/></li>
                <li><img src="./user.svg" alt="#"/></li>
                <li><img src="./shopping-cart.svg" alt="#"/></li>
            </ul>
        </div>
    );
}

