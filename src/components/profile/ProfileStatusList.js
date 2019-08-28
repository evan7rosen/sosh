import React from "react";
import Status from "../reusable/Status";
import { Comment } from "semantic-ui-react";
import { connect } from "react-redux";

const ProfileStatusList = props => {
  let listOfStatuses = props.statuses.all
    .filter(status => status.userId == props.user.id)
    .map(status => <Status key={status.id} status={status} />);

  return (
    <Comment.Group threaded>
      <Comment>{listOfStatuses}</Comment>
    </Comment.Group>
  );
};

const mapStateToProps = state => {
  return {
    statuses: state.statuses,
    users: state.users
  };
};

export default connect(mapStateToProps)(ProfileStatusList);
