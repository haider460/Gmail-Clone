import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';





function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch (logout)
    const signOut = () => {

        auth.signOut().then(() => {
            dispatch(logout())
        })
    
    } 
    
    return (
        <div className="header">
            <div className="header__left">
                <IconButton >
                    <MenuIcon className="header__MenuIcon" />
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt="gmail" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick = {signOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header
