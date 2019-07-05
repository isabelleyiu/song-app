// importing named export
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'A Whole New World', duration: '4:05' },
    { title: 'Let It Go', duration: '2:30' },
    { title: 'Under the Sea', duration: '3:15' },
    { title: 'Hakuna Matata', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// this is what our state will look like
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})