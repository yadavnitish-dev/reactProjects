import { useState } from "react";
import Comment from "./comment";

function NestedComments() {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "This is first comment",
      children: [
        {
          id: 2,
          comment: "This is second comment",
          children: [
            {
              id: 3,
              comment: "This is third comment",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      comment: "This is forth comment",
      children: [
        {
          id: 5,
          comment: "This is fift comment",
          children: [],
        },
      ],
    },
  ]);

  const handleAddReply = (getCurrentParentID, getCurrentReply) => {
    console.log(getCurrentParentID, getCurrentReply);
    const updatedComments = [...comments];
    handleAddNewComment(updatedComments, getCurrentParentID, getCurrentReply);
    setComments(updatedComments);
  };

  function newComment(text) {
    return {
      id: new Date().getTime(),
      comment: text,
      children: [],
    };
  }

  const handleAddNewComment = (
    updatedComments,
    getCurrentParentID,
    getCurrentReply
  ) => {
    for (let i = 0; i < updatedComments.length; i++) {
      const comment = updatedComments[i];
      if (comment.id === getCurrentParentID) {
        comment.children.unshift(newComment(getCurrentReply));
      }
    }

    for (let j = 0; j < updatedComments.length; j++) {
      const comment = updatedComments[j];
      handleAddNewComment(
        comment.children,
        getCurrentParentID,
        getCurrentReply
      );
    }
  };

  return (
    <div className="flex flex-col items-center h-screen gap-20">
      <h1 className="mt-20 text-8xl">NestedComments</h1>
      <div className="flex flex-col">
        <textarea
          name=""
          id=""
          rows={"5"}
          cols={"100"}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="shadow-2xl"
        />
        <br />
        <button
          onClick={() => {
            setComments([newComment(inputValue), ...comments]);
            setInputValue("");
          }}
          className="bg-indigo-600 text-white rounded-full px-3 py-1 mx-100"
        >
          Add comment
        </button>
      </div>
      <ul className="ml-20">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            handleAddReply={handleAddReply}
          />
        ))}
      </ul>
    </div>
  );
}

export default NestedComments;
