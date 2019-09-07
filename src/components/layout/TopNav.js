import React from "react";
import { Menu } from "semantic-ui-react";
import logo from "./logo.png";
import { connect } from "react-redux";
import { userLogOut } from "../../store/users/actions";
import faker from "faker";
import { Link } from "react-router-dom";

class TopNav extends React.Component {
  handleLogoutClick = e => {
    return this.props.userLogOut(this.props.history);
  };

  render() {
    return (
      <div>
        <Menu>
          <img src={logo} style={{ height: "60px" }} alt="logo" />
          <Menu.Menu position="right">
            <Link to={`/profile/16`}>
              <Menu.Item>
                <img src={faker.image.avatar()} />
              </Menu.Item>
            </Link>
            <Link to={`/profile/16`}>
              <Menu.Item name="Darcy Booker" style={{ marginTop: "10px" }} />
            </Link>
            <Menu.Item name="logout" onClick={this.handleLogoutClick} />
          </Menu.Menu>
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
