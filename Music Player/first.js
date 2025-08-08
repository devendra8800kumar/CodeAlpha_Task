const songs = [
  {
    title: "Music 1",
    file: "music/song1.mp3"
  },
  {
    title: "Music 2",
    file: "music/song2.mp3"
  },

  {
    title: "Music 3",
    file: "music/song3.mp3"
  }
];

let currentIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  audio.src = song.file;
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause";
  } else {
    audio.pause();
    playBtn.textContent = "Play";
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.textContent = "Pause";
});

loadSong(currentIndex);
