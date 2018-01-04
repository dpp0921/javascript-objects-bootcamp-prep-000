
var playlist = {artist: "song titles"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(newPlaylist, artistName){
  var newPlaylist;
  delete newPlaylist.artistName;
  return newPlaylist;
}