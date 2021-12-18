import React, { useRef } from 'react';
import VideoFooter from './VideoFooter/VideoFooter';
import VideoSidebar from './VideoSidebar/VideoSidebar';
import './Video.css';

const Video = ({ url, channel, description, song, likes, messages, shares }) => {
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (videoRef.current.paused)
      videoRef.current.play();
    else
      videoRef.current.pause();
  }

  return (
    <div className="video">
      <video
        ref={videoRef}
        className="video__player"
        loop
        onClick={onVideoPress}
        src={url}
      >
      </video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  )
}

export default Video
