
var playlist = {artist: "song titles"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlst, artistName){
  delete playlist.artistName;
  playlist;
}