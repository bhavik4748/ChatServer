import { useState, useEffect } from 'react';
import { Switch, useRouteMatch, Route, NavLink } from 'react-router-dom';

import { UserStatus } from './userStatus/userStatus';
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
            <NavLink to={`${url}/${x.id}`} key={x.name} className={classes.roomsTab} activeClassName="selected" >
                <div onClick={props.selectRoomHandler}  >
                    {x.name}
                </div>
            </NavLink>
        )
    })

    return (
        <div className={classes.ChatMainLayout}>
            <div className={classes.FixedLeftPanel} >
                <UserStatus userName={props.user} />
                {roomsDiv}
            </div>
            <Switch>
                <Route exact path={path}>
                    <div className={classes.selectRoom}>Please select a chat room.</div>
                </Route>
                <Route path={`${path}/:roomId`}>
                    <ChatWindow userName={props.user} />
                </Route>
            </Switch>
        </div>
    )
}