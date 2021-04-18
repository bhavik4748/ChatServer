import classes from './login.module.css';

export const Login = (props) => {
    return (
        <div className={classes.login}>
            <div>
                <input className={classes.loginInput} type="text" value={props.inputVal} maxLength="50" placeholder="Type your username..." onChange={props.changed} />
            </div>
            <div>
                <button className={classes.loginSubmit} type="submit">Join the Doordash Chat!</button>
            </div>

        </div>
    )
}


