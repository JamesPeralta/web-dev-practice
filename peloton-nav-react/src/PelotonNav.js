import React, {useState, useEffect} from "react";
import PelotonLogo from "./PelotonLogo";
import ProductList from "./ProductList";
import OtherItems from "./OtherItems";

function PelotonNav() {
    let products = ["BIKES", "TREAD", "APP", "CLASSES", "ACCESSORIES", "APPAREL"];
    const [openModal, setOpenModal] = useState("BIKES");
    const [hoveredModal, setHoveredModal] = useState("");
    const [showProduct, setShowProducts] = useState(true);
    const maxProductWidth = 1000;

    const handleClick = (item) => {
        if (item === openModal) {
            setOpenModal("");
        }
        else {
            setOpenModal(item);
        }
    }

    const handleWindowChange = () => {
        if (window.outerWidth > maxProductWidth) {
            setShowProducts(true);
        }
        else {
            setShowProducts(false);
        }
    }

    useEffect(() => {
        if (window.outerWidth > maxProductWidth) {
            setShowProducts(true);
        }
        else {
            setShowProducts(false);
        }

        window.addEventListener('resize', handleWindowChange);

        return () => window.removeEventListener('resize', handleWindowChange);
    }, [])

    const handleMouseOver = (name) => {
        setHoveredModal(name);
    }

    const handleMouseOut = () => {
        setHoveredModal("");
    }

    const handlers = {
        clickHandler: handleClick,
        hoverIn: handleMouseOver,
        hoverOut: handleMouseOut
    }

    return (
        <div className="peloton-nav">
            <PelotonLogo/>
            <ProductList products={showProduct ? products : []} openModel={openModal} handlers={handlers} hoveredModal={hoveredModal}/>
            <OtherItems/>
        </div>
    );
}

export default PelotonNav