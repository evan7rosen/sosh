import React from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import ConversationItem from "./ConverstionItem";

const ConversationList = props => {
  let listOfConversations = props.messages.all
    .filter(
      message =>
        message.sender_id === props.user.id ||
        message.recipient_id === props.user.id
    )

    .map(message => (
      <ConversationItem key={message.id} message={message} user={props.user} />
    ));

  return <Item.Group link>{listOfConversations}</Item.Group>;
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(ConversationList);
