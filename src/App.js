import React, { useEffect } from "react";
import TopNav from "./components/layout/TopNav";
import Dashboard from "./components/dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { fetchStatus } from "./store/statuses/actions";
import { fetchUsers } from "./store/users/actions";

const App = () => {
  const dispatch = useDispatch();
  // useEffect acts as componentDidMount()
  useEffect(() => {
    // dispatching fetch status and fetch users, executes API call
    dispatch(fetchStatus());
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <TopNav />
      <Dashboard />
    </div>
  );
};

export default App;
