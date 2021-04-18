import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ChatUsers } from './chatUsers/chatUsers';
import { ChatWindowForUsers } from './chatWindowForUsers/chatWindowForUsers';
import api from '../../../services/api';
import classes from './chatRoom.module.css';

export const ChatRoom = (props) => {
    let { roomId } = useParams();
   // console.log(roomId);
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
            <div className={classes.chatWindowHeader}>
                <div className={classes.roomName}>
                    {chatRoomName}
                </div>
                <ChatUsers primaryUser={props.userName} otherUsers={chatUsers} />
            </div>
            <div className={classes.chatWindowChatter}>
                <ChatWindowForUsers primaryUser={props.userName} roomId={roomId} />
            </div>

        </div>
    )
}