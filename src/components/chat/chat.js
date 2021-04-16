import { UserStatus } from '../userStatus/userStatus';
import { Rooms } from '../rooms/rooms';
import classes from './chat.module.css';

export const Chat = (props) => {

    // const selectRoomHandler = (event) => {
    //     console.log(event);
    // }

    return (
        <div className={classes.ChatMainLayout}>
            <div className={classes.FixedLeftPanel} >
                <UserStatus />
                <Rooms />
            </div>
            <div className={classes.ChatWindow}> chat window</div>
        </div>
    )
}