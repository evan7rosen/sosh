import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import faker from "faker";
import { connect } from "react-redux";

const Friend = props => {
  const user = props.users.all.filter(
    user => user.id === props.friend.requesteeId
  )[0];

  console.log("friend filter", user);

  return (
    <Card>
      <Image size="small" src={faker.image.people()} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Description>{user.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          content="Remove Friend"
          icon="user times"
          labelPosition="right"
          type="Remove Friend"
        />
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Friend);
