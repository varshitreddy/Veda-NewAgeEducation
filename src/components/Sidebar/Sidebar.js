import { Home,ThumbUp, OndemandVideo, Subscriptions, VideoLibrary, WatchLater, Whatshot, ExpandMore } from '@mui/icons-material';
import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({changeWidth}) => {
    const navigate = useNavigate();
const handleClick = ()=> navigate("/")
  return (
    <div className={`sidebar ${changeWidth && "sidebar__extraWidth"}`}>
        <div className="Sidebar__buttons">
            <div className="sidebar__btn sidebar__btn--active">
                <Home onClick={handleClick}className="sidebar__icon" />
                <p onClick={handleClick}>Home</p>
            </div>
            <div className="sidebar__btn">
                <Whatshot className="sidebar__icon" />
                <p>Trending</p>
            </div>
            <div className="sidebar__btn">
                <Subscriptions className="sidebar__icon" />
                <p>Subscriptions</p>
            </div>  
                                                
        </div>

        <div className="sidebar__buttons bottom">
            <div className="sidebar__btn">
                <VideoLibrary className="sidebar__icon" />
                <p>Libraries</p>
            </div>
            <div className="sidebar__btn">
                <OndemandVideo className="sidebar__icon" />
                <p>Your Videos</p>
            </div>
            <div className="sidebar__btn">
                <WatchLater className="sidebar__icon" />
                <p>Watch Later</p>
            </div>    
            <div className="sidebar__btn">
                <ThumbUp className="sidebar__icon" />
                <p>Liked Videos</p>
            </div>  
            <div className="sidebar__btn">
                <ExpandMore className="sidebar__icon" />
                <p>Show More</p>
            </div>                                
        </div>
        
    </div>
  )
}

export default Sidebar;