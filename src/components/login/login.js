import classes from './login.module.css';

export const Login = () => {
    return (
        <form className={classes.login}>
            <div>
                <input type="text" placeholder="Type your username..." />
            </div>
            <div>
                <button>Join the Doordash Chat!</button>
            </div>

        </form>
    )
}


