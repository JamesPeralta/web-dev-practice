import './App.css';
import React from "react";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            users: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        axios.get(`https://randomuser.me/api?page=${this.state.count}`)
            .then(response => {
                this.setState(prevState => {
                    let newUsers = [...prevState.users, {
                        name: response.data.results[0].name.first,
                        imgSrc: response.data.results[0].picture.thumbnail
                    }];

                    return {
                        users: newUsers,
                        count: prevState.count + 1
                    }
                })
            })
            .catch(error => {
                console.log("Error")
            })
    }

    userProfile = (user, index) => (
        <div key={index}>
            <h1>{user.name}</h1>
            <img src={user.imgSrc} alt="hello"/>
        </div>
    );


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                {this.state.users.map(this.userProfile)}
            </div>
        );
    };
}



export default App;
