import { Avatar } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoThumb = () => {
    const navigate = useNavigate();

    const handleThumbClick = () => navigate('/watch')
    const handleAvatarClick = () => navigate("/PreviewChannel")

  return (
    <div  className="videothumb">
       <img
        onClick={handleThumbClick}
       
       className="videothumb__thumbnail" src="https://i.ytimg.com/vi/ZzaPdXTrSb8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcOe9VKrCHSYH_wLdxNUK0IhNtOQ"
       alt="thumbnail"/>


       <div className="videothumb__details">
            <Avatar onClick={handleAvatarClick}/>
        
  
            <div className="videothumb__channel">
                <h1 className="videothumb__title">
                    welcome to VEDA
                </h1>
                <div className="videothumb__texts">
                    <p className="videothumb__text">Programming with Mosh</p>
                    <p className="videothumb__text"> 1.4M views • 8 months ago  </p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default VideoThumb