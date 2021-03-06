import { useState, useEffect } from 'react';
import { Switch, useRouteMatch, Route, NavLink } from 'react-router-dom';

import api from '../../services/api';
import { UserStatus } from './userStatus/userStatus';
import { ChatRoom } from './chatRoom/chatRoom';

import classes from './chatContainer.module.css';

export const ChatContainer = (props) => {
    let { path, url } = useRouteMatch();
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        async function getRooms() {
            try{
                const roomData = await api.getRooms();
                setRooms(roomData);
            }catch(err){
                console.err('Something went wrong')
            }
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
        <div className={classes.chatMainLayout}>
            <div className={classes.fixedLeftPanel} >
                <UserStatus userName={props.user} />
                {roomsDiv}
            </div>
            <Switch>
                <Route exact path={path}>
                    <div className={classes.selectRoom}>Please select a chat room.</div>
                </Route>
                <Route path={`${path}/:roomId`}>
                    <ChatRoom userName={props.user} />
                </Route>
            </Switch>
        </div>
    )
}