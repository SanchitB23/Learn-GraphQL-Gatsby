import React, {Component} from 'react';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import {hashHistory, Link} from "react-router";
import fetchSongs from "../graphql/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''}
  }

  onSubmit(event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{query: fetchSongs}]
    }).then(() => {
      hashHistory.push('/')
    }).catch(err => {
      console.log("mutate error", err)
    })
  }

  render() {
    return (
        <div>
          <Link onlyActiveOnIndex to="/">Back</Link>
          <h3>Create new song</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label htmlFor="title">Song Title</label>
            <input
                type="text"
                onChange={event => this.setState({title: event.target.value})}
                value={this.state.title}
                id="title"
            />

          </form>
        </div>
    );
  }
}

const mutation = gql`
    mutation AddSong($title:String){
        addSong(title: $title ){
            id
            title
        }
    }
`

export default graphql(mutation)(SongCreate);
