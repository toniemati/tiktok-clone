import React, { useRef } from 'react';
import VideoFooter from './VideoFooter/VideoFooter';
import VideoSidebar from './VideoSidebar/VideoSidebar';
import './Video.css';

const Video = ({ video }) => {
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
        src="https://v16-webapp.tiktok.com/bef50c2ee4be1f5ce4df0f2e241a657e/61bdf00c/video/tos/useast2a/tos-useast2a-pve-0068/09226556a50b414898ddb0b772ca2000/?a=1988&br=2168&bt=1084&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FO6kag3-I&l=20211218082810010223085019158B345F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQzd2Y6Zmx1OTMzNzczM0ApZzozOzozNTw7Nzo5NDlpNWdrLmg0cjRnX2NgLS1kMTZzcy4uNjFhLmJeMl4xYDItNC86Yw%3D%3D&vl=&vr="
      >
      </video>
      <VideoFooter channel="boxdil" description="zrob mi louda" song="masny ben - masno fest" />
      <VideoSidebar likes={300} messages={200} shares={100} />
    </div>
  )
}

export default Video
