import { useState, useEffect } from 'react';
import api from '../../../../services/api';

import classes from './chatWindowForUsers.module.css';

export const ChatWindowForUsers = (props) => {
    const [messages, setMessages] = useState([]);
    let userChatBox = null;
    console.log('aaaaa', props.roomId);
    useEffect(() => {
        async function getRoomMessages(id) {
            const msg = await api.getRoomMessages(id);
            console.log({ msg })
            setMessages(msg);
        }
        getRoomMessages(props.roomId);
    }, [setMessages, props.roomId]);


    if (messages.length > 0)
        userChatBox = messages.map(x => {
            return (<div className={classes.msgBox}>
                <div className={classes.msg}>{x.message}  </div>
                <div className={classes.msgUser}>{x.name}</div>
            </div>
            )
        })



    let userTextBox = (
        <>
            <div className={classes.textArea}>
                <textarea placeholder="Type a message..."></textarea>
            </div>
            <div>
                <button className={classes.sendBtn}>Send</button>
            </div>
        </>
    )



    return (
        <div className={classes.chatWindow}>
            <div className={classes.chatMessagesWindow}>{userChatBox}</div>
            <div className={classes.chatTextEnterWindow}>{userTextBox}</div>
        </div>
    )
}