import React from "react";

function Cell({cellValue, handleClick, index}) {
    return (
      <div className="cell" onClick={() => handleClick(index)}>
          {cellValue}
      </div>
    );
}

export default Cell;