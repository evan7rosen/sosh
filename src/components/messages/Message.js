import React from "react";
import { Item } from "semantic-ui-react";
import faker from "faker";
import Moment from "react-moment";
import { connect } from "react-redux";

const Message = props => {
  let messageAuthor = props.users.all.filter(
    user => user.id === props.message.sender_id
  )[0];

  return (
    <Item key={props.key} style={props.messageStyle}>
      {props.messageStyle.textAlign === "left" ? (
        <Item.Image size="tiny" src={faker.image.avatar()} />
      ) : (
        ""
      )}
      <Item.Content>
        <Item.Header as="a">{messageAuthor.name}</Item.Header>
        <Item.Meta>
          <Moment format="MM/DD/YYYY HH:mm A">
            {props.message.created_at}
          </Moment>
        </Item.Meta>
        <Item.Description>{props.message.body}</Item.Description>
      </Item.Content>
      {props.messageStyle.textAlign === "right" ? (
        <Item.Image
          size="tiny"
          src={faker.image.avatar()}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        />
      ) : (
        ""
      )}
    </Item>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Message);
