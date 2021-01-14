import React from 'react'
import './EmailRows.css'
import { Checkbox, IconButton } from "@material-ui/core";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../features/mailSlice';

function EmailRows({ id, title, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time 
        }));

        history.push('./component/email/Email.js')
    }
    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow1">
                <Checkbox />
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>
                    {subject}{"   "}
                <span className="emailRow__description">
                    {description}
                </span>
                </h4>          
            </div>
            <div className="emailRow__time">
                {time}
            </div>
        </div>
    )
}

export default EmailRows
