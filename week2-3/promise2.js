const playlist = [
  { songTitle: "So Far Away", artist: "Avenged Sevenfold" },
  { songTitle: "The Best of Time", artist: "Dream Theater" },
  {
    songTitle: "Please, Please, Please, Let Me Get What I Want",
    artist: "The Smiths",
  },
];

const getPlaylist = (playlist) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve(playlist);
      } else {
        reject(new Error("Songs not found"));
      }
    }, 300);
  });
};

const showPlaylist = (playlist) => {
  playlist.forEach((song) => {
    const {songTitle, artist} = song;
    console.log(`${artist} - ${songTitle}`);
  });
};

getPlaylist(playlist)
  .then(showPlaylist)
  .catch((err) => console.log(err));

/* Soal 3
Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
*/
