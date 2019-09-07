import React from "react";
import { Item, Container, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import BasicInfo from "./BasicInfo";
import ProfileStatusList from "./ProfileStatusList";
import AddFriend from "./AddFriend";

const Profile = props => {
  const user = props.users.all[0]
    ? props.users.all.filter(user => user.id == props.match.params.id)[0]
    : [];

  const userFriends = props.friends.all.filter(
    friend =>
      friend.accepted === true &&
      (friend.requestorId === 16 || friend.requesteeId === 16)
  );

  const isFriend =
    props.match.params.id == 16
      ? true
      : userFriends.filter(
          friend =>
            friend.requestorId == props.match.params.id ||
            friend.requesteeId == props.match.params.id
        ).length === 1;

  console.log("is friend", isFriend);
  return (
    <Container style={{ marginTop: "20px", marginLeft: "20px" }}>
      <Item.Group>{!isFriend ? <AddFriend user={user} /> : ""}</Item.Group>
      <Header as="h1" dividing>
        Profile
      </Header>

      <Item.Group>
        <BasicInfo user={user} />
      </Item.Group>
      <Item.Group>
        <Header as="h3" dividing>
          Posts
        </Header>
        <ProfileStatusList user={user} />
      </Item.Group>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    statuses: state.statuses,
    users: state.users,
    friends: state.friends
  };
};

export default connect(mapStateToProps)(Profile);
