import React from "react";

const Profile = props => {
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
};

export default Profile;
