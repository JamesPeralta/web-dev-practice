import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from "./productmodal";
import PelotonLogo from "./PelotonLogo";
import OtherItems from "./OtherItems";

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
            <PelotonLogo/>
            <ProductList products={products}/>
            <OtherItems/>
        </div>
    );
}
