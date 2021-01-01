import React from "react";

class PostStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comments: 0, retweets: 0, likes: 0};
        this.incrementComment = this.incrementComment.bind(this);
        this.incrementRetweet = this.incrementRetweet.bind(this);
        this.incrementLikes = this.incrementLikes.bind(this);
    }

    incrementComment() {
        this.setState(state => ({
            comments: state.comments + 1
        }));
    }

    incrementRetweet() {
        this.setState(state => ({
            retweets: state.retweets + 1
        }));
    }

    incrementLikes() {
        this.setState(state => ({
            likes: state.likes + 1
        }));
    }

    render() {
        return (
            <div className="post-stats">
                <Stats icon="./speech-bubble.svg" amount={this.state.comments} incrementer={this.incrementComment}/>
                <Stats icon="./retweet.svg" amount={this.state.retweets} incrementer={this.incrementRetweet}/>
                <Stats icon="./heart.svg" amount={this.state.likes} incrementer={this.incrementLikes}/>
                <img src="./send.svg" alt="?"/>
            </div>
        );
    }
}

function Stats(props) {
    return (
        <div className="stat">
            <img src={props.icon} alt="?" onClick={props.incrementer}/>
            <p>{props.amount}</p>
        </div>
    );
}

export default PostStats