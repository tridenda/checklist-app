import { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  // I just want to check whether the api link works or not
  // I'm stuck here, I have no idea why this is happening
  useEffect(() => {
    const getLoginToken = async () => {
      const response = await fetch("http://94.74.86.174:8080/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "tridenda297@gmail.com",
          password: "dendaganteng",
          username: "tridenda",
        }),
      });

      console.log(response);
    };

    console.log(process.env.ALAH);

    // getLoginToken();
  }, []);

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
      </header>
    </div>
  );
}

export default App;
