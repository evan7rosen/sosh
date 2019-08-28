import React from "react";
import { connect } from "react-redux";
import { addFriend, removeFriend } from "../../store/friends/actions";
import FriendList from "./FriendList";

const Friends = props => {
  const user = props.users.all[0]
    ? props.users.all.filter(user => user.id == props.match.params.id)[0]
    : [];

  return (
    <div>
      <h1>Friends</h1>
      <button onClick={props.history.goBack}>Back</button>
      <FriendList user={user} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  {
    addFriend,
    removeFriend
  }
)(Friends);
