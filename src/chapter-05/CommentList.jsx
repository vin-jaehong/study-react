import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "빈재홍",
    comment: "첫번째 코맨트 입니다.",
  },
  {
    name: "빈재홍",
    comment: "두번째 코맨트 입니다.",
  },
  {
    name: "빈재홍",
    comment: "세번째 코맨트 입니다.",
  },
];

const CommentList = () => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}></Comment>
        );
      })}
    </div>
  );
};

export default CommentList;
