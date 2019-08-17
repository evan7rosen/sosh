import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class SideNav extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed vertical tabular>
        <Link to="/homepage">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/profile">
          <Menu.Item
            name="Profile"
            active={activeItem === "Profile"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/friends">
          <Menu.Item
            name="Friends"
            active={activeItem === "Friends"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/messages">
          <Menu.Item
            name="Messages"
            active={activeItem === "Messages"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/settings">
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
