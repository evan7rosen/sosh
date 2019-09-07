import React from "react";
import { Item } from "semantic-ui-react";
import faker from "faker";
import { connect } from "react-redux";
import Moment from "react-moment";
import { selectMessage } from "../../store/messages/actions";

const ConversationItem = props => {
  const user = props.users.all.filter(user => {
    if (props.message.sender_id === props.user.id) {
      return user.id === props.message.requesteeId;
    } else return user.id === props.message.sender_id;
  })[0];

  const handleClick = e => {
    props.selectMessage(user);
  };

  if (user) {
    return (
      <Item onClick={handleClick}>
        <Item.Image size="tiny" src={faker.image.avatar()} />
        <Item.Content>
          <Item.Header>{user.name} </Item.Header>
          <Item.Description>
            <Moment format="MM/DD/YYYY HH:mm A">
              {props.message.created_at}
            </Moment>
          </Item.Description>
          <Item.Extra>{props.message.body.slice(0, 20)}...</Item.Extra>
        </Item.Content>
      </Item>
    );
  } else return <div></div>;
};
const mapStateToProps = state => {
  return {
    users: state.users,
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  {
    selectMessage
  }
)(ConversationItem);
