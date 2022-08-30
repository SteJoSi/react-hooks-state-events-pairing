import React, { useState } from "react";
import Comments from "./Comments"

function Link({ videoInfo }) {
    // console.log("Info", videoInfo)
    const [isShowing, setIsShowing] = useState(true)
    const [countUp, setCountUp] = useState(9210)
    const [countDown, setCountDown] = useState(185)

    const handleShowing = () => {
        setIsShowing(isShowing => !isShowing)
        console.log('button', isShowing)
    }

    const commentInfo = videoInfo.comments.map(comment => {
        return (
            <div key={comment.id}>
                <h4 className="user">{comment.user}</h4>
                <p className="comments">{comment.comment}</p>
            </div>
        )
    })

    // console.log('comment', commentInfo)

    function handleLikeButton() {
        setCountUp(countUp => countUp + 1)
    }

    function handleDislikeButton() {
        setCountDown(countDown => countDown - 1)
    }

    console.log('Like', handleLikeButton)

    return (
        <div className="linkInfo">
            <div>
                <iframe
                    width="919"
                    height="525"
                    src={videoInfo.embedUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="Thinking in React"
                />
            </div>
            <h1 className="title">{videoInfo.title}</h1>
            <p className="info">{videoInfo.views} views | Uploaded {videoInfo.createdAt}</p>
            <button className="like" onClick={handleLikeButton}>{countUp}👍</button>
            <button className="dislike" onClick={handleDislikeButton}>{countDown}👎</button>

            <div className="comments">
                <Comments commentInfo={commentInfo} handleShowing={handleShowing} isShowing={isShowing} />
            </div>
        </div>
    )
}

export default Link;