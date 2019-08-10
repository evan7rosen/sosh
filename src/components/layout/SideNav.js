import React from "react";
import "semantic-ui-css/semantic.min.css";

const SideNav = props => {
  return (
    <div className="ui vertical menu">
      <div className="item">
        <div className="ui input">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="item">
        Home
        <div className="menu">
          <a className="active item">Search</a>
          <a className="item">Add</a>
          <a className="item">Remove</a>
        </div>
      </div>
      <a className="item">
        <i className="grid layout icon" /> Browse
      </a>
      <a className="item">Messages</a>
      <div className="ui dropdown item">
        More
        <i className="dropdown icon" />
        <div className="menu">
          <a className="item">
            <i className="edit icon" /> Edit Profile
          </a>
          <a className="item">
            <i className="globe icon" /> Choose Language
          </a>
          <a className="item">
            <i className="settings icon" /> Account Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
