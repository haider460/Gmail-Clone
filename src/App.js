import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar'
import Mail from './component/email/Email'
import SendMail from './component/sendmail/SendMail'
import EmailList from './component/emaillist/EmailList'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { selectUser  } from './features/userSlice';
import Login from './component/Login/login' 
import { login } from './features/userSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser );


  
  const dispatch = useDispatch();
  

  
  useEffect(() => {
    auth.onAuthStateChanged((user) => { 
    if (user) {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl
        })
      );
      }
    });
    
  }, [])



  return (
    <Router>
      { !user ? (<Login />) : (
        <div className="app">
          <Header />
        <div className="app__Body">
            <SideBar/> 
          <Switch>
            <Route path="/component/email/Email.js">
                <Mail />
            </Route>
            <Route path="/">
                <EmailList />
            </Route>
          </Switch>
        </div>
      { sendMessageIsOpen && <SendMail />}
      </div>
        )}
      </Router>
  );
}

export default App;
