import React from "react";
import { Container, Divider } from "semantic-ui-react";
import NewStatusForm from "./NewStatusForm";
import StatusList from "./StatusList";

const Dashboard = () => {
  return (
    <Container style={{ marginTop: "25px" }}>
      <NewStatusForm />
      <Divider />
      <StatusList />
    </Container>
  );
};

export default Dashboard;
