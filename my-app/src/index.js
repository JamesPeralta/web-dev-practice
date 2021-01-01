import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialCard from './socialcard'

class NewsFeed extends React.Component {
    render() {
        let poster = [{profile: "./anon-profile.png", name: "James Peralta", handle: "@jamesperalta", posted: "1h"},
                      {profile: "./anon-profile.png", name: "Natu", handle: "@natuo09", posted: "1h"},
                      {profile: "./anon-profile.png", name: "Issack", handle: "@johnissack", posted: "1h"},
                      {profile: "./anon-profile.png", name: "Patrick", handle: "@patpaj", posted: "1h"}];

        return (
            <div className="news-feed">
                <h1>Bootleg Twitter Feed</h1>
                {poster.map(item => (<SocialCard key={item.handle} data={item}/>))}
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
