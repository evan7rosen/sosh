import React from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addComment } from "../../../store/comments/actions";

class NewCommentForm extends React.Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment({
      content: this.state.content,
      status_id: this.props.status.id,
      user_id: 16
    });
    this.setState({ content: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          placeholder="Reply to Post"
          onChange={this.handleChange}
          value={this.state.content}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    statuses: state.statuses,
    users: state.users,
    comments: state.comments
  };
};

export default connect(
  mapStateToProps,
  {
    addComment
  }
)(NewCommentForm);
