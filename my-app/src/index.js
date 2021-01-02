import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialCard from './socialcard'
const axios = require('axios');

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: Array(),
            isLoading: true
        }
        this.processUser();
    }

    async componentDidMount() {
        let newFetch = [];

        while (newFetch.length < 5) {
            let newUser = await this.processUser();
            let newContent = await this.getRandomContent();
            if (!newUser.name || !newUser.profile) {
                continue
            }

            newFetch.push({...newUser, ...newContent});
        }

        this.setState({
            Users: newFetch,
            isLoading: false
        });
    }

    processUser() {
        return axios.get('https://randomuser.me/api/')
            .then(function (response) {
                let profilePic = response.data.results[0].picture.medium;

                let nameObj = response.data.results[0].name;
                let usersName = nameObj.first + " " + nameObj.last;
                let handle = "@" + nameObj.last + nameObj.first;
                let posted = parseInt((Math.random() * 100)) % 24 + "h ago";

                return {profile: profilePic, name: usersName, handle: handle, posted: posted}
            })
            .catch(function (error) {
                return {}
            });
    }

    getRandomContent() {
        return axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
            .then(function (response) {
                return {content: response.data.joke};
            })
            .catch(function (error){
                return {}
            });
    }

    render() {
        let newsFeed = (<h3>News Feed is Loading...</h3>);
        if (!this.state.isLoading) {
            newsFeed = this.state.Users.map(item => (<SocialCard key={item.handle} data={item}/>));
        }

        return (
            <div className="news-feed">
                <h1>Random Joke Feed</h1>
                <h5>By: James Peralta</h5>
                {newsFeed}
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
