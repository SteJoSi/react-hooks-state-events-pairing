function Comments({ commentInfo, handleShowing, isShowing }) {

    return (
        <div>
            <button className="commentBtn" onClick={handleShowing}>{isShowing ? "Hide Comments" : "Show Comments"}</button>
            <h1 className="comments">2 Comments</h1>
            {commentInfo}
        </div>
    )
}

export default Comments