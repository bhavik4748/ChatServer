import { useState } from 'react';
import { useInterval } from '../../../services/shared'
import classes from './userStatus.module.css';

export const UserStatus = (props) => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    useInterval(() => {
        setTimeElapsed(timeElapsed => timeElapsed + 1);
    }, 60 * 1000);

    return (
        <div className={classes.userHeader}>
            <div className={classes.userLabel}>{props.userName}</div>
            <div className={classes.statusLabel}> Online for {timeElapsed} minutes </div>
        </div>
    )
}