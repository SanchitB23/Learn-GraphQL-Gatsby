import React, {Component} from 'react';
import {graphql} from "react-apollo";
import {Link} from "react-router";
import fetchSongs from "../../graphql/fetchSongs";
import gql from "graphql-tag";


class SongList extends Component {
  renderSongs() {
    return !this.props.data.loading && this.props.data.songs.map((song) => (
        <li
            key={song.id}
            className="collection-item"
        >
          <Link to={`/songs/${song.id}`} onlyActiveOnIndex={false}>{song.title}</Link>
          <i
              className="material-icons red-text hoverable"
              onClick={() => {
                this.onSongDelete(song.id)
              }}
          >delete</i>
        </li>
    ))
  }

  render() {
    return (
        <div>
          <ul className="collection">
            {this.renderSongs()}
          </ul>
          <Link to="/songs/new" className="btn btn-floating btn-large red right" onlyActiveOnIndex={true}>
            <i className="material-icons">add</i>
          </Link>
        </div>
    );
  }

  onSongDelete(id) {
    this.props.mutate({
      variables: {id}
    })
        .then(() => {
          this.props.data.refetch()
        })
  }
}


const mutation = gql`
    mutation DeleteSongs($id:ID){
        deleteSong(id:$id){
            id
        }
    }
`

export default graphql(mutation)(graphql(fetchSongs)(SongList));
