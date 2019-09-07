import React from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { sendMessage, selectMessage } from "../../store/messages/actions";

class NewConversationForm extends React.Component {
  state = {
    messageText: "",
    recipientSearch: "",
    recipient: {}
  };

  handleRecipientChange = e => {
    this.setState({
      recipientSearch: e.target.value
    });

    let recipientFilter = this.props.users.all.filter(
      user =>
        user.name.slice(0, this.state.recipientSearch.length) ===
        this.state.recipientSearch
    );

    this.setState({
      recipient: recipientFilter.length === 1 ? recipientFilter[0] : ""
    });
  };

  handleMessageChange = e => {
    this.setState({
      messageText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage({
      sender_id: 16,
      recipient_id: this.state.recipient.id,
      body: this.state.messageText
    });
    this.setState({ messageText: "" });
    this.props.selectMessage(this.state.recipient);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>New Conversation</h3>
        <Form.Input
          label="To"
          placeholder="Enter name"
          name="recipient"
          onChange={this.handleRecipientChange}
          value={this.state.recipientSearch}
          required
        />
        <Form.TextArea
          label="Send Message"
          placeholder="Send message"
          name="messageText"
          onChange={this.handleMessageChange}
          value={this.state.messageText}
          required
        />
        <Button
          content="Send"
          icon="edit"
          labelPosition="right"
          type="submit"
        />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    sendMessage,
    selectMessage
  }
)(NewConversationForm);
