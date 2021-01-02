import React from "react";
import "./productmodal.css"

class ProductList extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick() {
        console.log("Hello");
    }

    render() {
        return (
            <div>
                <ul className="products-list">
                    {this.props.products.map(item => (
                        <li key={item} onClick={this.handleClick}>
                            <p>{item}</p>
                            <p className="carot">╲╱</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProductList