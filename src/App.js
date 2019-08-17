import React, { Component } from "react";
import TopNav from "./components/layout/TopNav";
import Dashboard from "./components/dashboard/Dashboard";
import { connect } from "react-redux";
import { fetchAllStatuses } from "./store/statuses/actions";
import { fetchAllUsers } from "./store/users/actions";
import { Grid, Menu, Segment, GridColumn } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import SideNav from "./components/layout/SideNav";
import Profile from "./components/profile/Profile";
import Friends from "./components/friends/Friends";
import Messages from "./components/messages/Messages";
import Settings from "./components/settings/Settings";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllStatuses());
    this.props.dispatch(fetchAllUsers());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Grid>
            <Grid.Column stretched width={3}>
              <SideNav />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/homepage" component={Dashboard} />
                <Route path="/profile" component={Profile} />
                <Route path="/friends" component={Friends} />
                <Route path="/messages" component={Messages} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </Grid.Column>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
