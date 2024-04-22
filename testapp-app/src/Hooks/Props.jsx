// Conditional rendering is like deciding whether to show or hide something based on certain conditions
import React from "react";
import userDashboard from "./userDashboard";
import LoginForm from "./LoginForm";


function App() {
  const isLoggedIn = true; // Example condition, could be a state value or any other logic
 if (isLoggedIn) {
  return <userDashboard/>;
 } else {
  return <LoginForm/>;
 }
}
export default App;