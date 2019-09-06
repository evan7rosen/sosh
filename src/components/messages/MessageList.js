import React from "react";
import { Item } from "semantic-ui-react";
import Message from "./Message";
import { connect } from "react-redux";
import NewMessageForm from "./NewMessageForm";

const MessageList = props => {
  let listOfMessages = props.messages.all
    .filter(
      message =>
        (message.sender_id === props.messages.selectedMessage.id &&
          message.recipient_id === props.user.id) ||
        (message.recipient_id === props.messages.selectedMessage.id &&
          message.sender_id === props.user.id)
    )

    .map(message => (
      <Message
        key={message.id}
        message={message}
        user={props.messages.selectedMessage}
      />
    ));

  return (
    <div>
      <Item.Group>{listOfMessages}</Item.Group>;
      <NewMessageForm
        sender={props.user.id}
        recipient={props.messages.selectedMessage}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MessageList);
