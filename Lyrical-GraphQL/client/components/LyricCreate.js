import React, {Component} from 'react';
import gql from "graphql-tag";
import {graphql} from "react-apollo";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ''}
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.mutate({
      variables: {
        content: this.state.content,
        id: this.props.songId
      }
    }).then(() => {
      this.setState({content: ''});
    })
  }

  render() {
    console.log(this.props.songId)
    return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
              value={this.state.content}
              onChange={value => this.setState({content: value.target.value})}
          />
        </form>
    );
  }
}

const mutation = gql`
    mutation AddLyricToSong($content:String,$id:ID){
        addLyricToSong(content: $content,songId: $id){
            id
            lyrics{
                id
                content
                likes
            }
        }
    }
`
export default graphql(mutation)(LyricCreate);
