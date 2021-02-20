import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";

import store from "redux/store";
import PrivateRoute from "components/routing/PrivateRoute";
import PublicRoute from "components/routing/PublicRoute";

import { setCurrentUser } from "redux/actions/user";

import Auth from "containers/auth";
import Home from "containers/home/Home";
import "App.css";

// Check for token
if (localStorage.getItem("auth-token")) {
  // Set auth token header auth
  const token = localStorage.getItem("auth-token");
  // Decode token to get user infor
  const decoded = jwtDecode(token);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(setCurrentUser({}));
    localStorage.removeItem("auth-token");
  }
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute exact path="/auth" component={Auth} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
