import React, { Component } from 'react';
import { connect } from 'react-redux';

// this.props === { songs: state.songs }
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary">Select</button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }
  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// get state in redux store and pass state as props to component
// now we have access to whatever returns from mapStateToProps via this.props
const mapStateToProps = state => {
  // console.log(state);
  // getting the songlist from state
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(SongList);