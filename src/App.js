import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { Login } from './components/login/login';
import { Chat } from './components/chat/chat';


import './App.css';

function App() {
  const [loginUser, setLoginUser] = useState('');

  const LoginHandler = (event) => {
    event.preventDefault();

  }

  const changeHandler = (event) => {
    setLoginUser(event.target.value);
  }

  let login = (
    <form onSubmit={LoginHandler}>
      <Login inputVal={loginUser} changed={(event) => changeHandler(event)} />
      <NavLink to='/chat'>chat</NavLink>
    </form>
  )

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {login}
          </Route>
          <Route path="/chat">
            <Chat user={loginUser} />
          </Route>
          <Route path="*">
            {login}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
