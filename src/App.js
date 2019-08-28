import React, { Component } from "react";
import TopNav from "./components/layout/TopNav";
import Dashboard from "./components/dashboard/Dashboard";
import { connect } from "react-redux";
import { fetchAllStatuses } from "./store/statuses/actions";
import { fetchAllUsers } from "./store/users/actions";
import { fetchAllComments } from "./store/comments/actions";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import SideNav from "./components/layout/SideNav";
import Profile from "./components/profile/Profile";
import Friends from "./components/friends/Friends";
import Messages from "./components/messages/Messages";
import Settings from "./components/settings/Settings";
import "semantic-ui-css/semantic.min.css";
import { fetchAllFriends } from "./store/friends/actions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllStatuses());
    this.props.dispatch(fetchAllUsers());
    this.props.dispatch(fetchAllComments());
    this.props.dispatch(fetchAllFriends());
  }

  render() {
    console.log("logged in?", this.props.users.loggedIn);
    return (
      <Router>
        <div className="App">
          {this.props.users.loggedIn ? <TopNav /> : ""}
          <Grid>
            {this.props.users.loggedIn ? (
              <Grid.Column stretched width={3}>
                <SideNav />
              </Grid.Column>
            ) : (
              ""
            )}
            <Grid.Column stretched width={13}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/homepage/:id" component={Dashboard} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/friends/:id" component={Friends} />
                <Route path="/messages/:id" component={Messages} />
                <Route path="/settings/:id" component={Settings} />
              </Switch>
            </Grid.Column>
          </Grid>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(App);
