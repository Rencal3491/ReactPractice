import React, { useEffect, useRef, useState } from "react";
import { createGlobalStyle, keyframes } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import backgroundImage from "./images/background.jpg";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoContext";

const bounce = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(calc(100vw - 100%), 0) rotate(90deg);
  }
  50% {
    transform: translate(calc(100vw - 100%), calc(100vh - 100%)) rotate(180deg);
  }
  75% {
    transform: translate(0, calc(100vh - 100%)) rotate(270deg);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImage});
    background-repeat: repeat;
    background-size: 300px 300px;
    animation: ${bounce} 10s linear infinite;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoProvider>
        <div>
          <h1 className="title" style={{color: 'white', marginLeft: '20px'}}>Todo</h1>
        </div>
        <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
    </>
  );
}

export default App;