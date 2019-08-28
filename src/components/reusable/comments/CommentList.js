import React from "react";
import { connect } from "react-redux";
import { Comment } from "semantic-ui-react";
import OneComment from "./OneComment";

const CommentList = props => {
  console.log("comment list props", props);

  let listOfComments = props.comments.map(comment => (
    <OneComment key={comment.id} comment={comment} />
  ));

  console.log("list of comments", listOfComments);

  return <Comment style={{ marginLeft: "20px" }}>{listOfComments}</Comment>;
};

const mapStateToProps = (state, props) => ({
  comments: state.comments.all.filter(
    comment => comment.status_id == props.status.id
  )
});

export default connect(mapStateToProps)(CommentList);
