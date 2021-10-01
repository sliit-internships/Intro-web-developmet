import React from 'react'
import './postStyles.css';

const Post = (props) => {
    return (
        <div className="card post">
           <div className="card-header">{props.topic}</div>
            <p className="card-text">{props.content}</p>
        </div>
    )
}

export default Post
