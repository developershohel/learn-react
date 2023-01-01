import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Clock from './components/learn-react/LifecycleMethods'
import LearnEvent from './components/learn-react/LearnEvent'
import LoginEvent from './components/learn-react/LoginEvent'
import UserLoginSystem from './components/learn-react/ConditionalRendering'
import Mailbox from './components/learn-react/Mailbox'
import Warning from './components/learn-react/Warning'
import ListKeys from './components/learn-react/ListKeys'
import NameForm from './components/learn-react/NameForm'
import Containment from './components/learn-react/Containment'
import {UseEffect} from "./components/learn-react/UseEffect";

const root = ReactDOM.createRoot(document.getElementById('root'));
const messages = ['messages', 'is', 'created']
root.render(
    <React.StrictMode>
        <Clock/>
        <br/>
        <LearnEvent/>
        <br/>
        <LoginEvent/>
        <br/>
        <UserLoginSystem/>
        <br/>
        <Mailbox messages={messages}/>
        <Warning/>
            <ListKeys/>
            <NameForm/>
        <Containment/>
        <UseEffect/>
    </React.StrictMode>
)

reportWebVitals();
