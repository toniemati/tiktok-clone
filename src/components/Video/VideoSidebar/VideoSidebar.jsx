import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({ likes, messages, shares }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(isLiked ? false : true);
  }

  return (
    <div className="videoSidebar">
      <div 
        onClick={handleLike}
        className="videoSidebar__button"
      >
        {
          isLiked
          ? <FavoriteIcon fontSize="large" style={{ color: 'pink' }} />
          : <FavoriteBorderIcon fontSize="large" />
        }
        <p>{ isLiked ? likes + 1 : likes }</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{ messages }</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{ shares }</p>
      </div>
    </div>
  )
}

export default VideoSidebar;
