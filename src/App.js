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
  const [enteredUser, setEnteredUser] = useState('');
  let history = useHistory();

  const LoginHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length > 0) {
      setLoginUser(enteredUser.trim());
      history.push('/chat');
      return;
    }
    
  }

  const changeHandler = (event) => {
    setEnteredUser(event.target.value);
  }

  let login = (
    <form onSubmit={LoginHandler}>
      <Login inputVal={enteredUser} changed={(event) => changeHandler(event)} />
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
