import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
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
        <Icon name="user" />
        22 Friends
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
