import React, { useState } from "react";

function Comment({ comment, key, handleAddReply }) {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);

  return (
    <li key={key} className="ml-20 flex flex-col gap-2">
      <div>
        <span className="mr-5 font-medium">{comment.comment}</span>
        {!showReplyCommentBox ? (
          <button
            onClick={() => setShowReplyCommentBox(true)}
            className="text-indigo-600 underline"
          >
            Add Reply
          </button>
        ) : null}
      </div>
      {showReplyCommentBox ? (
        <div>
          <textarea
            name=""
            id=""
            value={reply}
            onChange={(event) => setReply(event.target.value)}
            rows={"3"}
            cols={"50"}
            className="border border-indigo-600"
          />
          <br />
          <div>
            <button
              onClick={() => {
                setReply("");
                setShowReplyCommentBox(false);
                handleAddReply(comment.id, reply);
              }}
              className="text-green-700 mr-5 underline"
            >
              Submit
            </button>
            <button
              onClick={() => {
                setShowReplyCommentBox(false);
                setReply("");
              }}
              className="text-red-700 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {comment && comment.children && comment.children.length > 0 ? (
        <ul>
          {comment.children.map((childComment) => (
            <Comment
              key={childComment.id}
              comment={childComment}
              handleAddReply={handleAddReply}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default Comment;
