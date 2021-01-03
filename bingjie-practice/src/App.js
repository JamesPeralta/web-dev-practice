import './App.css';
import React, {useState} from "react";


function App() {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    const handleClick = () => {
        fetch(`https://randomuser.me/api?page=${count}`)
            .then(response => response.json())
            .then(responseJson => {
                setUsers(prevUsers => (
                    [...prevUsers, {
                        name: responseJson.results[0].name.first,
                        imgSrc: responseJson.results[0].picture.thumbnail
                    }]
                ))

                setCount(prevCount => prevCount + 1);
            })
            .catch(error => {
                console.log("Error")
            })
    }

    const userProfile = (user, index) => (
            <div key={index}>
                <h1>{user.name}</h1>
                <img src={user.imgSrc} alt="hello"/>
            </div>
    )

    return (
        <div>
            <h1>Rendered count: {count}</h1>
            <button onClick={handleClick}>Click Me</button>
            {users.map(userProfile)}
        </div>
    );
}


export default App;
