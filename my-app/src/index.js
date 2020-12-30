import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NewsFeed extends React.Component {
    render() {
        let poster = [{profile: "./anon-profile.png", name: "James Peralta", handle: "@jamesperalta", posted: "1h"},
                      {profile: "./anon-profile.png", name: "Natu", handle: "@natuo09", posted: "1h"},
                      {profile: "./anon-profile.png", name: "Issack", handle: "@johnissack", posted: "1h"},
                      {profile: "./anon-profile.png", name: "Patrick", handle: "@patpaj", posted: "1h"}];

        return (
            <div className="news-feed">
                <h1>Bootleg Twitter Feed</h1>
                {poster.map(function (item) {
                    return <SocialCard data={item}/>;})}
            </div>);
    }
}

class SocialCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comments:0, retweets: 0, likes: 0};
    }

    incrementComment() {
        this.setState((state, props) => ({
            comments: state.comments + 1
        }));
    }

    incrementRetweet() {
        this.setState((state, props) => ({
            retweets: state.retweets + 1
        }));
    }

    incrementLikes() {
        this.setState((state, props) => ({
            likes: state.likes + 1
        }));
    }

    render() {
        return (
            <div className="full-card">
                <div className="profile-pic"><img src={this.props.data.profile} alt="anon profile"/></div>
                <div className="post-content">
                    <div className="poster-details">
                        <p><strong>{this.props.data.name}</strong></p>
                        <p>{this.props.data.handle}</p>
                        <p>{this.props.data.posted}</p>
                    </div>
                    <div className="content"><p>Forget Reindeer Games, it’s an OREO Reindeer Party! It only takes 15
                        minutes to pair our yummy cookies with crunchy pretzels for an easy treat friends & family
                        will love.</p></div>
                    <div className="post-stats">
                        <div className="stat">
                            <img src="./speech-bubble.svg" alt="?" onClick={this.incrementComment.bind(this)}/>
                            <p>{this.state.comments}</p>
                        </div>
                        <div className="stat">
                            <img src="./retweet.svg" alt="?" onClick={this.incrementRetweet.bind(this)}/>
                            <p>{this.state.retweets}</p>
                        </div>
                        <div className="stat">
                            <img src="./heart.svg" alt="?" onClick={this.incrementLikes.bind(this)}/>
                            <p>{this.state.likes}</p>
                        </div>
                        <img src="./send.svg" alt="?"/>
                    </div>
                </div>
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
