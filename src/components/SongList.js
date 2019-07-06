import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


// this.props === { songs: state.songs }
class SongList extends Component {
  renderSongList() {
    return this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }
  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderSongList()}</div>
  }
}

// get state in redux store and pass state as props to component
// now we have access to whatever returns from mapStateToProps via this.props
// each time our state gets updated, mapStateToProps will run again with updated state
const mapStateToProps = state => {
  console.log(state);
  // getting the songlist from state
  return {
    songs: state.songs
  }
}

// passing action creator as second arguement 
// Under the hood, connect is passing the resulting action to dispatch
// this is the only way to hook our action creator to the store
export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);