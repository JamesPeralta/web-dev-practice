import React, {useState} from "react";
import PelotonLogo from "./PelotonLogo";
import ProductList from "./ProductList";
import OtherItems from "./OtherItems";

function PelotonNav(props) {
    // Contain JSON Object of the data here
    // let products = ["BIKES", "TREAD", "APP", "CLASSES", "ACCESSORIES", "APPAREL"];
    let products = ["BIKES", "TREAD", "APP"];
    const [openModal, setOpenModal] = useState("");

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