import React from "react";
import { Menu } from "semantic-ui-react";
import logo from "./logo.png";
import { connect } from "react-redux";
import { userLogOut } from "../../store/users/actions";

class TopNav extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = e => {
    console.log("topnav history", this.props.history);
    return this.props.userLogOut(this.props.history);
  };

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

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    userLogOut
  }
)(TopNav);
