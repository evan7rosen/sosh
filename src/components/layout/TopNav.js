import React from "react";
import "semantic-ui-css/semantic.min.css";

const TopNav = props => {
  return (
    <div className="ui pointing menu">
      <a className="active item">Home</a>
      <a className="item">Messages</a>
      <a className="item">Friends</a>
      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
