import React from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { sendMessage } from "../../store/messages/actions";

class NewConversationForm extends React.Component {
  state = {
    messageText: "",
    recipient_id: "",
    options: []
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage({
      sender_id: 16,
      recipient_id: this.state.recipient,
      body: this.state.messageText
    });
    this.setState({ messageText: "" });
  };

  //   componentDidMount() {
  //     this.props.users.all.map(user => {
  //       const newOption = {};
  //       user
  //         ? (newOption = {
  //             key: user.name.slice(0, 2),
  //             value: user.id,
  //             text: user.name
  //           })
  //         : "";
  //       this.setState({ options: [...this.state.options, newOption] });
  //     });
  //     console.log("options", this.state.options);
  //   }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>New Conversation</h3>
        {/* <Dropdown
          placeholder="Enter name"
          fluid
          search
          selection
          options={this.state.options}
        /> */}
        <Form.Input
          label="To"
          placeholder="Enter name"
          name="recipient"
          onChange={this.handleChange}
          value={this.state.recipient}
          required
        />
        <Form.TextArea
          label="Send Message"
          placeholder="Send message"
          name="messageText"
          onChange={this.handleChange}
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
    sendMessage
  }
)(NewConversationForm);
