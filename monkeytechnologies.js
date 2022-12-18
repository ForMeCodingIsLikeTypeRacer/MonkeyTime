function play(audio) {
    audio.loop=true;
    audio.play();
  }

  function stop(audio) {
      audio.currentTime=0;
      audio.pause();
  }