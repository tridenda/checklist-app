import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { Wrapper, Label, Input, ColumnContainer } from "./register.styles";

const Register = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
    setCurrentUser(event.target.value);
  };

  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async () => {
    const response = await fetch(
      "https://checklist-app.hasura.app/api/rest/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      }
    );

    if (response.status === 200) {
      setCurrentUser(email);
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <ColumnContainer>
        <Label for="email">Email: </Label>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          onChange={onEmailChangeHandler}
        />
      </ColumnContainer>
      <ColumnContainer>
        <Label for="email">Username: </Label>
        <Input
          name="username"
          type="text"
          placeholder="Username"
          onChange={onUsernameChangeHandler}
        />
      </ColumnContainer>
      <ColumnContainer>
        <Label for="email">Password: </Label>
        <Input
          name="password"
          type="text"
          placeholder="Password"
          onChange={onPasswordChangeHandler}
        />
      </ColumnContainer>
      <ColumnContainer>
        <button onClick={onSubmitHandler}>Submit</button>
      </ColumnContainer>
    </Wrapper>
  );
};

export default Register;
