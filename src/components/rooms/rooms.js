import { useState, useEffect } from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';

import api from '../../services/api';
import classes from './rooms.module.css';

export const Rooms = (props) => {
    let { path, url } = useRouteMatch();
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
            <NavLink to={`${url}/${x.id}`} key={x.name}>
                <div onClick={props.selectRoomHandler}  className={classes.roomsTab} value={x.id}>
                    {x.name}
                </div>
            </NavLink>
        )
    })

    return (
        <div>
            {roomsDiv}
        </div>
    )
}