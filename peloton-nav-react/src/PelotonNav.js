import React, {useState} from "react";
import PelotonLogo from "./PelotonLogo";
import ProductList from "./ProductList";
import OtherItems from "./OtherItems";

function PelotonNav(props) {
    let products = ["BIKES", "TREAD", "APP", "CLASSES", "ACCESSORIES", "APPAREL"];
    const [openModal, setOpenModal] = useState("BIKES");

    const handleClick = (item) => {
        if (item === openModal) {
            setOpenModal("");
        }
        else {
            setOpenModal(item);
        }
    }

    return (
        <div className="peloton-nav">
            <PelotonLogo/>
            <ProductList products={products} openModel={openModal} handleClick={handleClick}/>
            <OtherItems/>
        </div>
    );
}

export default PelotonNav