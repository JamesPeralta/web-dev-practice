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
                        <img src="./speech-bubble.svg" alt="?"/>
                        <img src="./retweet.svg" alt="?"/>
                        <img src="./heart.svg" alt="?"/>
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
