import logo from './logo.svg';
import axios, { AxiosRequestConfig } from "axios";
import './App.css';
import { useCallback } from 'react';

const params: AxiosRequestConfig & { domain: string, body: any } = {
  domain: "localhost:8080",
  withCredentials: false,
  headers: {},
  body: { username: "hello", password: "world" }
}

function App() {
  const login = useCallback(async () => {
    try {
      const res = await axios.post(`http://${params.domain}/login`, params.body, { withCredentials: params.withCredentials, headers: params.headers });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
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
