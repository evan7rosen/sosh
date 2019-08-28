import React from "react";
import Friend from "./Friend";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";

const FriendList = props => {
  let listOfFriends = props.friends.all
    .filter(
      request =>
        (request.requestorId === props.user.id ||
          request.requesteeId === props.user.id) &&
        request.accepted === true
    )
    .map(friend => <Friend key={friend.id} friend={friend} />);

  return <Card.Group>{listOfFriends}</Card.Group>;
};

const mapStateToProps = state => {
  return { friends: state.friends };
};

export default connect(mapStateToProps)(FriendList);
