import React from "react";

const Settings = props => {
  return (
    <div>
      <h1>Settings</h1>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
};

export default Settings;
