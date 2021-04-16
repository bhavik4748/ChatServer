import classes from './rooms.module.css';
import { useState, useEffect } from 'react';
import api from '../../services/api';


export const Rooms = (props) => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        async function getRooms() {
            const roomData = await api.getRooms();
            setRooms(roomData);
        }
        getRooms();
    }, [setRooms]);

    let roomsDiv = rooms.map(x => {
        return (
            <div onClick={props.selectRoomHandler} key={x.name} className={classes.roomsTab} value={x.id}>
                {x.name}
            </div>
        )
    })

    return (
        <div>
            {roomsDiv}
        </div>
    )
}