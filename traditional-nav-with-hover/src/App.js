import React from "react";
import NavBar from "./NavBar";
import RangePlayer from "./RangePlayer";

function App() {
    return (
        <div>
            <NavBar/>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                width: "100%"
            }}>
                <RangePlayer/>
            </div>
        </div>
    )
}

export default App;