import React from 'react';
import videoURL from '../../assets/videos/video.mp4';
import { MoreHoriz, PlaylistAdd, Reply, ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import "./styles.css";
import {VideoSmall} from '..';
import { useNavigate } from 'react-router-dom';

const Watch = () => {
    const navigate = useNavigate();
    const handleAvatarRedirect =()=> navigate("/PreviewChannel")

  return (
    <div className="watch">
        <div className="watch__wrap">
            <div className="watch__left">
                <video className="watch__video" autoPlay controls>
                    <source src={videoURL} type='video/mp4'/>
                </video>

                <div className="watch__leftBtm">
                    <h1 className="watch__title">amazon prime trailer </h1>
                    <div className="watch__videoInfo">
                        <div className="watch__videoInfoLeft">
                            <p className="videothumb__text"> 1.4M views • 11-May-2023  </p>
                        </div>
                        <div className="watch__videoInfoRight">
                            <div className="watch__likeContainer">
                                <div className="watch__likeWarp">
                                    <div className="watch__likeBtnContainer color--grey">
                                        <ThumbUpAlt className='watch__icon'/>
                                        <p>15k</p>
                                    </div>
                                    <div className="watch__likeBtnContainer color--grey">
                                        <ThumbDownAlt className='watch__icon'/>
                                        <p>1500</p>
                                    </div>                                    
                                </div>

                                <div className='watch__likeDislikebar'/>
                            </div>
                            <div className="watch__likeBtnContainer color--grey">
                                        <Reply className='watch__icon share-icon'/>
                                        <p>Share</p>
                            </div>
                            <div className="watch__likeBtnContainer color--grey">
                                        <PlaylistAdd className='watch__icon share-icon play/add-icon'/>
                                        <p>Save</p>
                            </div>  
                            <div className="watch__likeBtnContainer color--grey">
                                        <MoreHoriz className='watch__icon share-icon play/add-icon'/>
                                        <p>Save</p>
                            </div>                                                       
                        </div>
                    </div>
                </div>

                <div className='watch__details'>
                    <div className='watch__detailsContainer'>
                        <div className='videothumb__details watch__avatarWrap '>
                            <Avatar style={{cursor: "pointer"}} onClick={handleAvatarRedirect}/>
                        
                            <div className="videothumb__channel">
                                <h1 className="videothumb__title">Prime Video </h1>
                                 <p className="videothumb__text watch__subCount">4.86M Subscribers</p>
                            </div>
                        </div> 
                        <Button className='watch__subBtn' color='primary' variant='contained'>
                            SUBSCRIBE
                        </Button>
                    </div>

                    <div className='watch__description'>
                        <p>
                        Lando Norris may not be named after Star Wars rebel Lando Calrissian -
                         his Mum just liked the moniker - but he has flair and fighting spirit in bountiful supply.
                         McLaren had the British teenager on their books for two years before fast-tracking him into F1’s galaxy of stars in 2019.
                         A firecracker in his junior career,
                         with a penchant for pole positions and wheel-to-wheel tussles, Norris didn’t let them down. 
                        </p>
                        <p className='watch__showMore'>
                            Show More
                        </p>
                    </div>
                </div>
            </div>
            <div className='watch__right'>
                <VideoSmall/>
                <VideoSmall/>
                <VideoSmall/>
                <VideoSmall/>
                <VideoSmall/>
                <VideoSmall/>
                <VideoSmall/>
                
            </div>
        </div>        
    </div>
  )
}

export default Watch