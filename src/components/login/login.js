import classes from './login.module.css';

export const Login = (props) => {
    return (
        <div className={classes.login}>
            <div>
                <input type="text" value={props.inputVal}
                placeholder="Type your username..." onChange={props.changed} />
            </div>
            <div>
                <button type="submit">Join the Doordash Chat!</button>
            </div>

        </div>
    )
}


