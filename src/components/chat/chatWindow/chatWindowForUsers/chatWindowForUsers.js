import { useState, useEffect, useCallback } from 'react';
import api from '../../../../services/api';
import { AlwaysScrollToBottom } from '../../../../services/shared';

import classes from './chatWindowForUsers.module.css';

export const ChatWindowForUsers = (props) => {
    const [messages, setMessages] = useState([]);
    const [textAreaInput, setTextAreaInput] = useState('');
    let userChatBox = null;

    useEffect(() => {
        async function getRoomMessages(id) {
            const msg = await api.getRoomMessages(id);
            setMessages(msg);
        }
        getRoomMessages(props.roomId);
    }, [setMessages, props.roomId, props.primaryUser]);

    const getRoomMessages = useCallback(async (id) => {
        const msg = await api.getRoomMessages(id);
        setMessages(msg);
    }, [setMessages]);

    if (messages.length > 0) {
        userChatBox = messages.map(x => {
            return (<div key={x.id}
                className={`${classes.msgBox} ${props.primaryUser === x.name ? classes.primaryUser : ""}    `}>
                <div className={classes.msg}>{x.message}  </div>
                <div className={classes.msgUser}>{x.name}</div>
            </div>
            )
        })
    }

    const handleTextAreaChange = (event) => {
        setTextAreaInput(event.target.value);
    }

    const submitChatMessage = (event) => {
        event.preventDefault();
        try {
            // call post api to post messages
            api.postRoomMessages(props.roomId, props.primaryUser, textAreaInput);
             // call get api to get updates
            getRoomMessages(props.roomId);
        } catch (err) {
            console.error(err);
        }
        setTextAreaInput('');
    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            submitChatMessage(e);
        }
    }

    let userTextBox = (
        <form className={classes.form} onSubmit={submitChatMessage}>
            <div className={classes.textArea}>
                <textarea value={textAreaInput} onChange={handleTextAreaChange}
                    onKeyDown={onEnterPress} placeholder="Type a message..."></textarea>
            </div>
            <div>
                <button type="submit" className={classes.sendBtn}>Send</button>
            </div>
        </form>
    )



    return (
        <div className={classes.chatWindow}>
            <div className={classes.chatMessagesWindow}>
                <div className={classes.overflowAuto}>
                    {userChatBox}  <AlwaysScrollToBottom />
                </div>
            </div>
            <div className={classes.chatTextEnterWindow}>{userTextBox}</div>
        </div>
    )
}