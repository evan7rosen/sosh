import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Comment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CommentList from "../reusable/comments/CommentList";

const Status = props => {
  let user = props.users.all.filter(user => user.id === props.status.userId)[0];
  if (user) {
    return (
      <Comment key={props.key}>
        <Comment.Avatar src={faker.image.avatar()} />
        <Comment.Content>
          <Link to={`/profile/${user.id}`}>
            <Comment.Author as="a">{user.name}</Comment.Author>
          </Link>
          <Comment.Metadata>
            <Moment format="MM/DD/YYYY HH:mm A">
              {props.status.createdAt}
            </Moment>
          </Comment.Metadata>
          <Comment.Text>{props.status.content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          <CommentList status={props.status} />
        </Comment.Group>
      </Comment>
    );
  } else {
    return <div>Loading ... </div>;
  }
};

const mapStateToProps = state => {
  return {
    statuses: state.statuses,
    users: state.users
  };
};

export default connect(mapStateToProps)(Status);
