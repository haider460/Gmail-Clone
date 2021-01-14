import React from 'react'
import { Button, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import './SideBar.css'
import SideBarOption from '../SideBarOption/SideBarOption';
import StarIcon from '@material-ui/icons/Star';
import InboxIcon from '@material-ui/icons/Inbox';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NearMeIcon from '@material-ui/icons/NearMe';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch } from 'react-redux';
import { OpenSendMessage } from '../../features/mailSlice'


function SideBar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">

            <Button
                startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose"
                onClick={ () => dispatch(OpenSendMessage())}>
                Compose
            </Button>

            <SideBarOption Icon={InboxIcon} title='Inbox' number={54} selected={true}  />
            <SideBarOption Icon = {StarIcon} title='Snoozed' number={54} />
            <SideBarOption Icon={ AccessTimeIcon} title='Important' number={54} />
            <SideBarOption Icon={LabelImportantIcon} title='Important' number={54}  />
            <SideBarOption Icon={NearMeIcon } title='Sent' number={54} />
            <SideBarOption Icon={NoteIcon} title='Drafts' number={54}  />
            <SideBarOption Icon={ExpandMoreIcon} title='More' number={54} />
            
            <div className="sidebar__footer">
                <div className="sidebar__footericons">
                    <IconButton >
                        <PersonIcon />
                    </IconButton>
                    <IconButton >
                        <DuoIcon />
                    </IconButton>
                    <IconButton >
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>


    )
}

export default SideBar
