import React from "react";

const Messages = props => {
  return (
    <div>
      <h1>Messages</h1>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
};

export default Messages;
