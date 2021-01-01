import React from 'react';
import './socialcard.css';
import PostStats from "./poststats";

function SocialCard(props){
    return (
        <div className="full-card">
            <div className="profile-pic"><img src={props.data.profile ? props.data.profile : "./anon-profile.png"} alt="anon profile"/></div>
            <div className="post-content">
                <PostAuthor authorDetails={props.data}/>
                <PostContent content={props.data.content}/>
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

function PostContent(props) {
    return (
        <div className="content">
            <p>{props.content}</p>
        </div>
    );
}

export default SocialCard