import React from "react";
import { Item, List } from "semantic-ui-react";
import faker from "faker";

const BasicInfo = ({ user }) => {
  return (
    <Item>
      <Item.Image size="small" src={faker.image.people()} />
      <Item.Content>
        <Item.Header as="a">{user.name}</Item.Header>
        <Item.Description>
          <List>
            <List.Item>
              <List.Icon name="users" />
              <List.Content>{user.company}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>{user.address}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>{user.email}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="phone" />
              <List.Content>{user.phone}</List.Content>
            </List.Item>
          </List>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default BasicInfo;
