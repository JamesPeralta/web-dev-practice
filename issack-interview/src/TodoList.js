import React from "react"
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            todoItems: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleEnter);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEnter)
    }

    handleEnter(e) {
        if (e.keyCode === 13) {
            this.setState(prevState => (
                {
                    inputText: "",
                    todoItems: [...prevState.todoItems, prevState.inputText]
                }
            ))
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <ol style={{borderStyle: "solid", width: 200}}>
                    {this.state.todoItems.map((elem, index) => {
                        return (<li key={uuidv4()}><TodoItem itemName={elem}/></li>);
                    })}
                </ol>
                <input
                    type="text"
                    name="inputText"
                    placeholder="Add Items"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default TodoList