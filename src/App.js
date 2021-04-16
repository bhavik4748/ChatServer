import { useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { Login } from './components/login/login';
import { Chat } from './components/chat/chat';


import './App.css';

function App() {
  const [loginUser, setLoginUser] = useState('');
  let history = useHistory();

  const LoginHandler = (event) => {
    event.preventDefault();
    history.push('/chat');
    return;
  }

  const changeHandler = (event) => {
    setLoginUser(event.target.value);
  }

  let login = (
    <form onSubmit={LoginHandler}>
      <Login inputVal={loginUser} changed={(event) => changeHandler(event)} />
    </form>
  )

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
