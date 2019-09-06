import React from "react";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import faker from "faker";

class OneComment extends React.Component {
  state = {
    reply: false
  };

  handleClick = e => {
    this.setState({ reply: true });
  };

  render() {
    return (
      <Comment>
        <Comment.Avatar src={faker.image.avatar()} />
        <Comment.Content>
          <Comment.Author as="a">{this.props.user.name}</Comment.Author>
          <Comment.Text>{this.props.comment.content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action onClick={this.handleClick}>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.users.all.filter(user => user.id == props.comment.user_id)[0]
});
export default connect(mapStateToProps)(OneComment);
