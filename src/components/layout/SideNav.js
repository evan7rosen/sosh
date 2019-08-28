import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SideNav extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed vertical tabular>
        <Link to={`/homepage/16`}>
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to={`/profile/16`}>
          <Menu.Item
            name="Profile"
            active={activeItem === "Profile"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to={`/friends/16`}>
          <Menu.Item
            name="Friends"
            active={activeItem === "Friends"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to={`/messages/16`}>
          <Menu.Item
            name="Messages"
            active={activeItem === "Messages"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to={`/settings/16`}>
          <Menu.Item
            name="Settings"
            active={activeItem === "Settings"}
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(SideNav);
