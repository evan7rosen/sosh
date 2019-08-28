import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import faker from "faker";

const Friend = props => {
  console.log("friend", props);
  return (
    <Card>
      <Image size="small" src={faker.image.people()} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.friend.name}</Card.Header>
        <Card.Description>{props.friend.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        22 Friends
      </Card.Content>
    </Card>
  );
};

export default Friend;
