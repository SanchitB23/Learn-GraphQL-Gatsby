import React, {Component} from 'react';
import {hashHistory} from "react-router";
import {graphql} from "react-apollo";
import currentUserQuery from "../graphql/queries/currentUserQuery";

export default (WrappedComponent) => {
  class RequireAuth extends Component {

    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push('/auth/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);
};

