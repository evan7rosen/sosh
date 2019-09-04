import React from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addStatus } from "../../store/statuses/actions";

class NewStatusForm extends React.Component {
  state = {
    status: ""
  };

  handleChange = e => {
    this.setState({ status: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addStatus({
      user_id: 16,
      content: this.state.status
    });
    this.setState({ status: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          label="Create Post"
          placeholder="Update your status"
          onChange={this.handleChange}
          value={this.state.status}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    statuses: state.statuses,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    addStatus
  }
)(NewStatusForm);
