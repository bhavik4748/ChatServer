import classes from './chatUsers.module.css';
export const ChatUsers = (props) => {
    let otherUsers = props.otherUsers.join(', ');
    return (
        <div className={classes.UserContainer}>
            <div className={classes.PrimaryUser} >{props.primaryUser}</div>
            <div className={classes.OtherUsers} >{otherUsers.length > 1 ? ', ' : ''}{otherUsers}</div>
        </div>
    )
}