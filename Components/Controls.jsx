'use client';
import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
const Controls = ({ togglePlayPause, isPlaying, backThiry, forwardThiry }) => {
  return (
    <div className="player__btns">
      <button className="player__btn" onClick={backThiry}>
        <FaArrowRotateLeft />
        30
      </button>
      <button className=" play-pause--btn" onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
        
      </button>
      <button className="player__btn" onClick={forwardThiry}>
        <FaArrowRotateRight />
         30
      </button>
    </div>
  );
};

export default Controls;
