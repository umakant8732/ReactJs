import React from "react";


const PostCard = (props) => {
    return (
        <>
            <div className="post-card">
                <h3>{props.cardData.title}</h3>
                <p>{props.cardData.body}</p>
            </div>
        </>
    )
}


export default PostCard;