
import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom';

const VideoSmall = ({channelView = false}) => {
    const navigate = useNavigate();
  const handleClickRedirect = ()=> navigate("/watch")
  return (
    <div onClick={handleClickRedirect} className={`videoSmall ${channelView && "videoSmall__channelView"}`}>
        <div className='videoSmall__left'>
            <img 
            src="https://i.ytimg.com/vi/ZtmIq0lVMeI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCo1ibGBuq3vtQSPvmAfiyU-S-L9Q"
             alt="thumbnail" className={`videoSmall__thumbnail ${channelView && "videoSmall__channelView__img"}`}
             />
            </div>     
             <div className='videoSmall__right'>
                <p className='videoSmall__title'>
                    amazon prime vide new web series
                </p>
                <div className="videoSmall__texts videothumb__texts">
                {!channelView && (
                  <p className="videothumb__text">Programming with Mosh</p>
                )}
                    
                    <p className="videothumb__text"> 1.4M views • 8 months ago  </p>
                </div>
             </div>
               

    </div>
  )
}

export default VideoSmall



