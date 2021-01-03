import React, {useState, useEffect} from "react"
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';


function TodoList(props) {
    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([])

    function handleEnter(e) {
        if (e.keyCode === 13) {
            setTodoItems(prevTodoItems => [...prevTodoItems, inputText]);
            setInputText("");
        }
    }

    function handleChange(e) {
        setInputText(e.target.value);
    }

    function handleRemove(index) {
        setTodoItems(prevTodoItems => {
            return prevTodoItems.filter((item, num) => index !== num)
        })
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEnter);
        return (() => document.removeEventListener("keydown", handleEnter))
    }, [handleChange])

    return (
        <div>
            <ol style={{borderStyle: "solid", width: 200}}>
                {todoItems.map((elem, index) => {
                    return (<li key={uuidv4()}><TodoItem itemName={elem} handleRemove={handleRemove} id={index}/></li>);
                })}
            </ol>
            <input
                type="text"
                name="inputText"
                placeholder="Add Items"
                value={inputText}
                onChange={handleChange}
            />
        </div>
    )
}

export default TodoList