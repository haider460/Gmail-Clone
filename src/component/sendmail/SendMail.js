import React from 'react'
import './sendmail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CloseSendMessage } from "../../features/mailSlice";
import { db } from '../../firebase';
import firebase from 'firebase';


function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        // console.log(data)
        db.collection("emails").add({
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(CloseSendMessage());
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header" >
                <h4>New Message</h4>
            <CloseIcon  onClick={() => dispatch(CloseSendMessage())} className="sendMail__close"  />
            </div>
            <form className="sendMail__form" onSubmit={handleSubmit(onSubmit)} >
                <input
                    name="to"
                    type="email"
                    placeholder="To"
                    ref={register({ required: true })}
                />
                {errors.to && <p className="sendMail__error">To is required</p>}
                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    ref={register({ required: true })}
                />
                <input
                    name='message'
                    type="text"
                    placeholder="Message"
                    className="sendMail__formDiv____desc"
                    ref={register({ required: true })}
                />
                
                <div className="sendMail__otpions">
                    <Button className="sendMail__Button" type="submit"> Send</Button>
                </div>
                {/* onSubmit={handleSubmit(onSubmit)} */}
                {/* ref={register({required: true})} */}
            </form>
            
        </div>
    )
}

export default SendMail
