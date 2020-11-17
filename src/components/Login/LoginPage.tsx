import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

function LoginPage() {
  const signInFunc = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <LoginPageDiv>
      <div className="Login_logo">
        <img
          src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg"
          alt="Discord Logo"
        />
      </div>
      <Button onClick={signInFunc}>Sign In</Button>
    </LoginPageDiv>
  );
}

const LoginPageDiv = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  place-items: center;
  height: 100vh;

  & .Login_logo > img {
    object-fit: contain;
    height: 500px;
  }

  & > button {
    width: 300px;
    background-color: #738adb;
    color: #eff2f5;

    &:hover {
      background-color: black;
      color: #738adb;
    }
  }
`;

export default LoginPage;
