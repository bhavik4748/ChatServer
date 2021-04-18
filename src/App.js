import { useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { Login } from './components/login/login';
import { ChatContainer } from './components/chat/chatContainer';
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

  let chatComponent = login;
  if (loginUser) {
    chatComponent = <ChatContainer user={loginUser} />
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {login}
        </Route>
        <Route path="/chat">
          {chatComponent}
        </Route>
        <Route path="*">
          {login}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
