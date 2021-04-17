import { useState, useEffect, useRef } from 'react';
import api from '../../../../services/api';

import classes from './chatWindowForUsers.module.css';

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
};


export const ChatWindowForUsers = (props) => {
    const [messages, setMessages] = useState([]);
    let userChatBox = null;
    let userChatBox1 = null;
    useEffect(() => {
        async function getRoomMessages(id) {
            const msg = await api.getRoomMessages(id);
            setMessages(msg);
        }
        getRoomMessages(props.roomId);
    }, [setMessages, props.roomId]);


    if (messages.length > 0) {
        userChatBox = messages.map(x => {
            return (<div key={x.id} className={classes.msgBox}>
                <div className={classes.msg}>{x.message}  </div>
                <div className={classes.msgUser}>{x.name}</div>
            </div>
            )
        })
        userChatBox1 = messages.map(x => {
            return (<div key={x.id} className={classes.msgBox}>
                <div className={classes.msg}>{x.message}  </div>
                <div className={classes.msgUser}>{x.name}</div>
            </div>
            )
        })
    }




    let userTextBox = (
        <form>
            <div className={classes.textArea}>
                <textarea placeholder="Type a message..."></textarea>
            </div>
            <div>
                <button className={classes.sendBtn}>Send</button>
            </div>
        </form>
    )



    return (
        <div className={classes.chatWindow}>
            <div className={classes.chatMessagesWindow}>
                <div className={classes.overflowAuto}>
                    {userChatBox} {userChatBox1} <AlwaysScrollToBottom />
                </div>
            </div>
            <div className={classes.chatTextEnterWindow}>{userTextBox}</div>
        </div>
    )
}