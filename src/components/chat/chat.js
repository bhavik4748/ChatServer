import { useState, useEffect } from 'react';
import { Switch, useRouteMatch, Route, NavLink } from 'react-router-dom';

import { UserStatus } from '../userStatus/userStatus';
//import { Rooms } from '../rooms/rooms';
import { ChatWindow } from './chatWindow/chatWindow';
import api from '../../services/api';
import classes from './chat.module.css';

export const Chat = (props) => {
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
                <div onClick={props.selectRoomHandler} className={classes.roomsTab} >
                    {x.name}
                </div>
            </NavLink>
        )
    })

    return (
        <div className={classes.ChatMainLayout}>
            <div className={classes.FixedLeftPanel} >
                <UserStatus />
                {roomsDiv}
            </div>
            <Switch>
                <Route exact path={path}>
                    <h4>Please select a chat topic.</h4>
                </Route>
                <Route path={`${path}/:roomId`}>
                    <ChatWindow />
                </Route>
            </Switch>
        </div>
    )
}