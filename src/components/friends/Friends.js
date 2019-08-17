import React from "react";

const Friends = props => {
  return (
    <div>
      <h1>Friends</h1>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
};

export default Friends;
