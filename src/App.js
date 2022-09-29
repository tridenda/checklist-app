import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Register from "./components/register/register.component";

import { UserContextProvider } from "./contexts/user.context";

import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return navigate("/login");
    }
  }, []);

  return <h1>Hello there</h1>;
};

const Login = () => {
  return <h1>Hello I'm login</h1>;
};

function App() {
  // I just want to check whether the api link works or not
  // I'm stuck here, I have no idea why this is happening
  useEffect(() => {
    // const getLoginToken = async () => {
    //   const response = await fetch("http://94.74.86.174:8080/api/register/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       email: "tridenda297@gmail.com",
    //       password: "dendaganteng",
    //       username: "tridenda",
    //     }),
    //   });
    //   console.log(response);
    // };
    // console.log(process.env.ALAH);
    // getLoginToken();
  }, []);

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
