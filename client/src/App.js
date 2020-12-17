import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Auth";
import Login from "./pages/Login";
import Orders from "./pages/Orders"


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
