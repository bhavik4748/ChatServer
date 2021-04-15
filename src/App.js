import { useState } from 'react';
import { Login } from './components/login/login'


import './App.css';

function App() {
  const [loginVal, setLoginVal] = useState('');

  const LoginHandler = (event) => {
    event.preventDefault();

  }

  const changeHandler = (event) => {
    setLoginVal(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={LoginHandler}>
        <Login inputVal={loginVal} changed={(event) => changeHandler(event)} />
      </form>
    </div>
  );
}

export default App;
