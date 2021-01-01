import React from 'react';
import './socialcard.css';
import PostStats from "./poststats";

function SocialCard(props){
    return (
        <div className="full-card">
            <div className="profile-pic"><img src={props.data.profile ? props.data.profile : "./anon-profile.png"} alt="anon profile"/></div>
            <div className="post-content">
                <PostAuthor authorDetails={props.data}/>
                <PostContent/>
                <PostStats/>
            </div>
        </div>
    );
}

function PostAuthor(props) {
    return (
        <div className="poster-details">
            <p><strong>{props.authorDetails.name}</strong></p>
            <p>{props.authorDetails.handle}</p>
            <p>{props.authorDetails.posted}</p>
        </div>
    );
}

function PostContent() {
    return (
        <div className="content">
            <p>Forget Reindeer Games, it’s an OREO Reindeer Party! It only takes 15
            minutes to pair our yummy cookies with crunchy pretzels for an easy treat friends & family
            will love.</p>
        </div>
    );
}

export default SocialCard