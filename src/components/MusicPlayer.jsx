import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import tracks from '../data/tracks';

export default function MusicPlayer() {
  const [current, setCurrent] = useState(0);

  const handleEnd = () => setCurrent((current + 1) % tracks.length);

  return (
    <footer className="music-player">
      <AudioPlayer
        src={tracks[current].src}
        onEnded={handleEnd}
        header={tracks[current].title}
        showSkipControls={false}
        showJumpControls={false}
        layout="horizontal-reverse"
      />
    </footer>
  );
}
