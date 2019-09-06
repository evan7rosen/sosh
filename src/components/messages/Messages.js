import React from "react";
import { connect } from "react-redux";
import { Grid, Image } from "semantic-ui-react";
import ConversationList from "./ConversationList";
import MessageList from "./MessageList";

const Messages = props => {
  const user = props.users.all[0]
    ? props.users.all.filter(user => user.id == props.match.params.id)[0]
    : [];
  return (
    <Grid divided>
      <Grid.Row>
        <h1 style={{ padding: "10px" }}>Messages</h1>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <ConversationList user={user} />
        </Grid.Column>
        <Grid.Column width={8}>
          <MessageList user={user} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Messages);
