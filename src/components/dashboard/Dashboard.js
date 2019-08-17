import React from "react";
import NewStatusForm from "./NewStatusForm";
import StatusList from "./StatusList";
import "semantic-ui-css/semantic.min.css";

const Dashboard = () => {
  return (
    <div class="ui segment padded">
      <NewStatusForm />
      <div class="divider" />
      <StatusList />
    </div>
  );
};

export default Dashboard;
