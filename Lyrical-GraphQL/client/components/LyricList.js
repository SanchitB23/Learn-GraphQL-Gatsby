import React, {Component} from 'react';
import gql from "graphql-tag";
import {graphql} from "react-apollo";

class LyricList extends Component {

  renderLyrics() {
    return this.props.lyrics.map(({id, content, likes}) => {
      return (
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              <i
                  className="material-icons blue-text hoverable"
                  onClick={() => {
                    this.onLike(id, likes)
                  }}
              >thumb_up</i>
              {likes}
            </div>
          </li>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
        <ul className="collection">
          {this.renderLyrics()}
        </ul>
    );
  }

  onLike(id, likes) {
    this.props.mutate({
      variables: {id},
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    })
  }
}

const mutation = gql`
    mutation doLikes ($id:ID!){
        likeLyric(id: $id){
            likes
            id
        }
    }
`
export default graphql(mutation)(LyricList);
