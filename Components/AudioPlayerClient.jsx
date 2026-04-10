"use client";
import React, { useEffect, useRef, useState } from "react";
import Controls from "./Controls";

const AudioPlayerClient = ({ book }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer?.current?.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
      progressBar.current.style.setProperty(
        "--seek-before-width",
        `${(progressBar.current.value / duration) * 100}%`,
      );
      setCurrentTime(progressBar.current.value);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`,
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThiry = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  };

  const forwardThiry = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  };

  return (
    <div className="audio__player">
      <div className="book__audioPlayer">
        <img
          src={book.imageLink}
          className="book__audio-player--img"
          alt={book.title}
        />
        <div className="book__audioPlayer--text">
          <h2 className="book__title">{book.title}</h2>
          <p className="author">{book.author}</p>
        </div>
      </div>
      <audio ref={audioPlayer} src={book.audioLink} />

      <Controls
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
        backThiry={backThiry}
        forwardThiry={forwardThiry}
      />

      <div className="audioPlayer__time">
        <div>{calculateTime(currentTime)}</div>

        <div>
          <input
            type="range"
            defaultValue={0}
            ref={progressBar}
            onChange={changeRange}
            className="progress-bar"
          />
        </div>

        <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
      </div>
    </div>
  );
};

export default AudioPlayerClient;
