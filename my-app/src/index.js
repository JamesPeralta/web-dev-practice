import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialCard from './socialcard'
const axios = require('axios');

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Users: Array()}
        this.processUser();
    }

    async componentDidMount() {
        let newFetch = [];
        for (let i = 0; i < 5; i++){
            newFetch.push(await this.processUser())
        }

        this.setState({Users: newFetch});
    }

    async processUser() {
        let newUser = await axios.get('https://randomuser.me/api/')
            .then(function (response) {
                let profilePic = response.data.results[0].picture.medium;

                let nameObj = response.data.results[0].name;
                let usersName = nameObj.first + " " + nameObj.last;
                let handle = "@" + nameObj.last + nameObj.first;
                let posted = "1h";

                return {profile: profilePic, name: usersName, handle: handle, posted: posted}
            })
            .catch(function (error) {
                console.log(error);
                return {}
            });

        return newUser;
    }

    render() {
        return (
            <div className="news-feed">
                <h1>Bootleg Twitter Feed</h1>
                {this.state.Users.map(item => (<SocialCard key={item.handle} data={item}/>))}
            </div>);
    }
}


// ========================================

ReactDOM.render(
    <div>
        <NewsFeed/>
    </div>,
    document.getElementById('root')
);
