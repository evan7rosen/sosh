import React from "react";
import { Item } from "semantic-ui-react";
import Message from "./Message";
import { connect } from "react-redux";
import NewMessageForm from "./NewMessageForm";
import ScrollToBottom from "react-scroll-to-bottom";

const MessageList = props => {
  let listOfMessages = props.messages.selectedMessage.name
    ? props.messages.all
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
            messageStyle={
              message.sender_id === props.user.id
                ? { textAlign: "right" }
                : { textAlign: "left" }
            }
          />
        ))
    : [];

  return (
    <div>
      <Item.Group divided>{listOfMessages}</Item.Group>
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
