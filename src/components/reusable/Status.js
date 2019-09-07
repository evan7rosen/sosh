import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Comment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CommentList from "../reusable/comments/CommentList";
import NewCommentForm from "./comments/NewCommentForm";

class Status extends React.Component {
  state = {
    reply: false,
    viewComments: false
  };

  user = this.props.users.all.filter(
    user => user.id === this.props.status.user_id
  )[0];

  handleClickReply = e => {
    this.setState({ reply: !this.state.reply });
  };

  handleClickComments = e => {
    this.setState({ viewComments: !this.state.viewComments });
  };

  render() {
    if (this.user) {
      return (
        <Comment key={this.props.key}>
          <Comment.Avatar src={faker.image.avatar()} />
          <Comment.Content>
            <Link to={`/profile/${this.user.id}`}>
              <Comment.Author as="a">{this.user.name}</Comment.Author>
            </Link>
            <Comment.Metadata>
              <Moment format="MM/DD/YYYY HH:mm A">
                {this.props.status.createdAt}
              </Moment>
            </Comment.Metadata>
            <Comment.Text>{this.props.status.content}</Comment.Text>
            <Comment.Actions>
              <Comment.Action onClick={this.handleClickReply}>
                Reply
              </Comment.Action>
              <Comment.Action onClick={this.handleClickComments}>
                View Comments
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            {this.state.reply ? (
              <NewCommentForm status={this.props.status} />
            ) : (
              ""
            )}
            {this.state.viewComments ? (
              <CommentList status={this.props.status} />
            ) : (
              ""
            )}
          </Comment.Group>
        </Comment>
      );
    } else {
      return <div>Loading ... </div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    statuses: state.statuses,
    users: state.users
  };
};

export default connect(mapStateToProps)(Status);
