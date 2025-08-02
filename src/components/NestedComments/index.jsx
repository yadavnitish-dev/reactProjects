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
          children: [],
        },
        {
          id: 3,
          comment: "This is third comment",
          children: [
            {
              id: 4,
              comment: "This is forth comment",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      comment: "This is sixth comment",
      children: [],
    },
  ]);
  return (
    <div>
      <h1>NestedComments</h1>
      <div>
        <textarea name="" id="" rows={"5"} cols={"100"} value={inputValue} />
        <br />
        <button>Add comment</button>
      </div>
      <ul>
        {
            comments.map(comment => <Comment key={comment.id} comment= {comment} />)
        }
      </ul>
    </div>
  );
}

export default NestedComments;
