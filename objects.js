
var playlist = {artist: "song titles"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(newPlaylst, artistName){
  var newPlaylist;
  delete newPlaylist.artistName;
  return newPlaylist;
}