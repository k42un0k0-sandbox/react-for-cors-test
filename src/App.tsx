import logo from './logo.svg';
import axios from "axios";
import './App.css';
import { useCallback } from 'react';

const params = {
  domain: "localhost:8080",
  headers: {},
  body: { username: "hello", password: "world" }
}

function App() {
  const login = useCallback(() => {
    axios.post(`http://${params.domain}/login`, params.body, { headers: params.headers }).then((res) => console.log(res))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={login} >ログイン</button>
      </header>
    </div>
  );
}

export default App;
