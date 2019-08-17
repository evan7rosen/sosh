import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import Moment from "react-moment";

const Status = props => {
  console.log("props.users", props.users.all);
  let user = props.users.all.filter(user => user.id === props.status.userId)[0];
  console.log("user", user);
  if (user) {
    return (
      <div className="comment" key={props.key}>
        <a className="avatar">
          <img src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author">{user.name}</a>
          <div className="metadata">
            <Moment format="MM/DD/YYYY HH:mm A">
              {props.status.createdAt}
            </Moment>
          </div>
          <div className="text">{props.status.content}</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ... </div>;
  }
};

const mapStateToProps = state => {
  return {
    statuses: state.statuses,
    users: state.users
  };
};

export default connect(mapStateToProps)(Status);
