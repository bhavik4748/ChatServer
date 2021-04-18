import classes from './chatUsers.module.css';

export const ChatUsers = (props) => {
    const usersNotPrimary = [...props.otherUsers];
    let ind = usersNotPrimary.indexOf(props.primaryUser);
    if (ind > -1)
        usersNotPrimary.splice(ind, 1);
    let otherUsers = usersNotPrimary.join(', ');
    return (
        <div className={classes.userContainer}>
            <div className={classes.primaryUser} >{props.primaryUser}</div>
            <div className={classes.otherUsers} >{otherUsers.length > 1 ? ', ' : ''}{otherUsers}</div>
        </div>
    )
}