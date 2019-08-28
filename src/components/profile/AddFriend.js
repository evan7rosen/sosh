import React from "react";
import { Button, Item, Icon } from "semantic-ui-react";

const AddFriend = props => {
  return (
    <Item>
      <Item.Content verticalAlign="middle">
        <Item.Header>Do you know {props.user.name}?</Item.Header>
        <Item.Description>
          To see what he shares with friends, send him a friend request.
          <Button icon labelPosition="right" floated="right">
            Add Friend
            <Icon name="user plus" />
          </Button>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default AddFriend;
