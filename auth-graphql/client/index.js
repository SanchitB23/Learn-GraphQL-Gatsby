import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {createNetworkInterface} from "apollo-client";
import {ApolloProvider} from "react-apollo";
import Header from "./components/Header";
import {hashHistory, Route, Router} from "react-router";
import App from "./components/App";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Dashboard from "./components/Dashboard";
import requireAuth from "./containers/requireAuth";

//send cookies with all requests
const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  dataIdFromObject: value => value.id,
  networkInterface
})

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="auth">
              <Route path="login" component={Login}/>
              <Route path="signup" component={Signup}/>
            </Route>
            <Route path="dashboard" component={requireAuth(Dashboard)}/>
          </Route>
        </Router>
      </ApolloProvider>
  );
};

// noinspection JSCheckFunctionSignatures
ReactDOM.render(<Root/>, document.querySelector('#root'));
