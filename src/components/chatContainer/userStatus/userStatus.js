import { useState } from 'react';
import {useEffect} from 'react';
import classes from './userStatus.module.css';

export const UserStatus = (props) => {
    const [timeElapsed, setTimeElapsed] = useState(0);

    const changeTime=()=>{
        setTimeElapsed(timeElapsed + 1);
    }
    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 60 * 1000)
        return () => clearInterval(tick)
    })

    let minutesVar = 'minute';
    if (timeElapsed > 1)
        minutesVar = 'minutes'
    return (
        <div className={classes.userHeader}>
            <div className={classes.userLabel}>{props.userName}</div>
            <div className={classes.statusLabel}> Online for {timeElapsed} {minutesVar} </div>
        </div>
    )
}