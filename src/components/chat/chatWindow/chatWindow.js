import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../../services/api';
import classes from './chatWindow.module.css';


export const ChatWindow = (props) => {
    let { roomId } = useParams();
    console.log(roomId);
    const [chatRoomName, setChatRoomName] = useState();
    const [chatUsers, setChatUsers] = useState([]);
    useEffect(() => {
        async function getRoomDetail(roomId) {
            const { name, users } = await api.getRoomDetails(roomId);
            setChatRoomName(name);
            setChatUsers([...users]);
        }
        getRoomDetail(roomId);
    }, [setChatRoomName, roomId, setChatUsers]);
    return (
        <div className={classes.chatWindow}>
            <div className={classes.roomName}>
            {chatRoomName}
            </div>
            My custon chat window   {chatUsers}
        </div>
    )
}