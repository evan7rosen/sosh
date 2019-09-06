import React from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { sendMessage } from "../../store/messages/actions";

class NewMessageForm extends React.Component {
  state = {
    messageText: ""
  };

  handleChange = e => {
    this.setState({ messageText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage({
      sender_id: 16,
      recipient_id: this.props.recipient.sender_id,
      content: this.state.messageText
    });
    this.setState({ status: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.TextArea
          label="Send Message"
          placeholder="Send message"
          onChange={this.handleChange}
          value={this.state.messageText}
        />
        <Button type="submit">Send</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  {
    sendMessage
  }
)(NewMessageForm);
