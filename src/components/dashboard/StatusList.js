import React from "react";
import Status from "../reusable/Status";
import { Comment, Header } from "semantic-ui-react";
import { connect } from "react-redux";

const StatusList = props => {
  let listOfStatuses = props.statuses.all.map(status => (
    <Status key={status.id} status={status} />
  ));
  return (
    <Comment.Group threaded>
      <Header as="h3" dividing>
        News Feed
      </Header>
      {listOfStatuses}
    </Comment.Group>
  );
};

const mapStateToProps = state => {
  return { statuses: state.statuses, users: state.users };
};

export default connect(mapStateToProps)(StatusList);
