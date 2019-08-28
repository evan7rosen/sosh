import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../store/users/actions";
import Logo from "../layout/logo.png";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(userLogin(this.state, this.props.history));
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column" style={{ maxWidth: "450px" }}>
          <h1 className="ui teal image header">
            <img src={Logo} className="image" alt="logo" />
            <div className="content">Log-in to your account</div>
          </h1>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button
                className="ui fluid large teal submit button"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="ui error message" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
