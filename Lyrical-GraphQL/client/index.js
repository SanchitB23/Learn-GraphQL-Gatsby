import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongList from "./components/SongList";
import App from "./components/App";
import SongCreate from "./components/songCreate";
import SongDetail from "./components/songDetail";


const client = new ApolloClient({
  dataIdFromObject: value => value.id,
})

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SongList}/>
            <Route path="songs/new" component={SongCreate}/>
            <Route path="songs/:id" component={SongDetail}/>
          </Route>
        </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(<Root/>, document.querySelector('#root'));
