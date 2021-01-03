import React, {useState} from "react";

function RangePlayer() {
    const [rangeValue, setRangeValue] = useState(0);

    const handleChange = (e) => {
        setRangeValue(e.target.value)
    }

    const newStyle = {
        borderStyle: "solid",
        width: 100,
        height: 100,
        textAlign: "center",
        borderRadius: rangeValue + "%"
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <input type="range" value={rangeValue} onChange={handleChange} min="0" max="50"/>
            <h1 style={newStyle}><p>{rangeValue}</p></h1>
        </div>
    )
}

export default RangePlayer;