import { Menu, Search, VideoCall,Notifications,Apps, PersonAddOutlined } from '@mui/icons-material';
import {Avatar, Badge, Button, Popover } from '@mui/material';
import React from 'react';
import logo from "../../assets/logo2.png";
import "./styles.css";
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();

  const handleHomeClick = () => navigate('/')
  return (
    <div className="header">
        <div className="header__left">
            <Menu className="header__menuicon"/>
            <img onClick={handleHomeClick}  className="header__logo" src={logo} alt='VEDA'/>
        </div>

        <form className="header__center">
            <input className="header__input"  placeholder="search" />
            <Button className="header__btn">
                <Search className="header__searchIcon"/>
            </Button>
        </form>

        <div className="header__right">
            <VideoCall/>
            <Apps/>
            <Notifications/>
            <Avatar onClick={handleClick}/>
            <Popover 
            open={open}
            id={id}
            onClose={handleClose}
            anchorEl={anchorEl}
            
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top", 
            }}
            >
            <div className='home__popoverContainer'>
               <div className='home__popover__top'>
                <Badge overlap="circle" anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
                }}
               /* badgeContent={
                   /* <div className='home__badge'>
                    <CameraAltOutlined className='home__camera'/>
                </div>}*/
                
                >
                    <Avatar className='header__avatar'/>
                    </Badge>
                    <div className='home__text'>
                        <div className='home__displayName'>
                            VARSHIT REDDY
                        </div>
                        <div className='home__mail'>
                            varshitreddy777@gmail.com
                        </div>
                    </div>
                    <div className='home__btn'>
                        Manage your google account
                    </div>
                </div> 
                <div className='home__popover__btm'>
                    <div className='home__addBtn'>
                        <PersonAddOutlined className='home__AddIcon'/>
                        <p>Add another account</p>
                    </div>
                    <Button variant='outlined' className='home__signOut'>
                        Sign Out
                    </Button>
                    
                </div>
            </div>
               
            </Popover>
        </div>
    </div>
  )
}

export default Header