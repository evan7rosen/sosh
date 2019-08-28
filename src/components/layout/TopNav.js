import React from "react";
import { Input, Menu } from "semantic-ui-react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class TopNav extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu>
          <img src={logo} style={{ height: "60px" }} alt="logo" />

          <Menu.Item
            position="right"
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

export default TopNav;
