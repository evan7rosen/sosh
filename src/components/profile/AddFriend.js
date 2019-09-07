import React from "react";
import { Button, Item, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { addFriend } from "../../store/friends/actions";

class AddFriend extends React.Component {
  state = {
    requestMsg: ""
  };

  handleClick = e => {
    this.props.addFriend({
      requestorId: 16,
      requesteeId: this.props.user.id,
      accepted: true
    });
    this.setState({
      submitMsg: `You have sent a friend request to ${this.props.user.name}`
    });
  };

  render() {
    return (
      <Item>
        <Item.Content verticalAlign="middle">
          <Item.Header>Do you know {this.props.user.name}?</Item.Header>
          <Item.Description>
            To see what he shares with friends, send him a friend request.
            <Button
              icon
              labelPosition="right"
              floated="right"
              onClick={this.handleClick}
            >
              Add Friend
              <Icon name="user plus" />
            </Button>
            <Item.Extra>
              <p>{this.state.submitMsg}</p>
            </Item.Extra>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  {
    addFriend
  }
)(AddFriend);
