import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";

const Status = props => {
  if (props.users) {
    console.log("props.users", props.users);
    let user = props.users.filter(user => user.id === props.status.userId)[0];
    console.log("user", user);
    return (
      <div className="comment" key={props.key}>
        <a className="avatar">
          <img src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author">{user.name}</a>
          <div className="metadata">
            <span className="date">{props.status.createdAt}</span>
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
