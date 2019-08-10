import React from "react";
import Status from "./Status";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";

const StatusList = props => {
  let listOfStatuses = props.statuses.map(status => (
    <Status key={status.id} status={status} />
  ));
  return (
    <div className="ui list">
      <div className="ui comments">
        <h3 className="ui dividing header">News Feed</h3>
        <div className="item">{listOfStatuses}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { statuses: state.statuses };
};

export default connect(mapStateToProps)(StatusList);
