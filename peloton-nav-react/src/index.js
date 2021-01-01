import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <div>
        <PelotonNav/>
    </div>,
    document.getElementById('root')
);

function PelotonNav(props) {
    return (
        <div className="peloton-nav">
            <Logo/>
            <ProductList/>
            <OtherItems/>
        </div>
    );
}

function Logo(props) {
    return (
        <div>
            <img src="./peloton-logo.svg" alt="peloton"/>
        </div>
    );
}

function ProductList(props) {
    return (
        <ul className="products-list">
            <li>Bikes</li>
            <li>Tread</li>
            <li>App</li>
            <li>Classes</li>
        </ul>
    );
}

function OtherItems(props) {
    return (
        <ul className="other-items">
            <li><img src="./location.svg" alt="#"/></li>
            <li><img src="./user.svg" alt="#"/></li>
            <li><img src="./shopping-cart.svg" alt="#"/></li>
        </ul>
    );
}

