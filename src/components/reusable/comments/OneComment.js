import React from "react";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import faker from "faker";

class OneComment extends React.Component {
  handleClick = e => {
    this.setState({ reply: true });
  };

  render() {
    return (
      <Comment>
        <Comment.Avatar src={faker.image.avatar()} />
        <Comment.Content>
          <Link to={`/profile/${this.props.user.id}`}>
            <Comment.Author as="a">{this.props.user.name}</Comment.Author>
          </Link>
          <Comment.Text>{this.props.comment.content}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.users.all.filter(user => user.id == props.comment.user_id)[0]
});
export default connect(mapStateToProps)(OneComment);
