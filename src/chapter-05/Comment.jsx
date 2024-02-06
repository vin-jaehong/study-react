import React from "react";

const componentStyleObj = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

const Comment = (props) => {
  return (
    <div style={componentStyleObj.wrapper}>
      <div style={componentStyleObj.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={componentStyleObj.image}
          alt="commentImage"
        />
      </div>
      <div style={componentStyleObj.contentContainer}>
        <span style={componentStyleObj.nameText}>{props.name}</span>
        <span style={componentStyleObj.commentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
