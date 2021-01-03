import React from "react"

function TodoItem(props){
    return (
        <div style={{display: "flex"}}>
            <p>{props.itemName}</p>
            <button onClick={() => props.handleRemove(props.id)}>Remove</button>
        </div>
    )
}

export default TodoItem