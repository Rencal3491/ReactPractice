import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const NavigateHeader = styled.div`
    height: 40px;
    width: 100%;
    background: black;
    display: flex;
    justify-content: end;
    align-items: center;
    color: white;
    margin-right: 20px;
  `;

  const NavItem = styled.button`
    display: inline-flex;
    width: 100%;
    height: 30px;
    font-size: 20px;
    color: white;
    justify-content: center;
    align-items: center;
    background: black;
    border: none;
  `;

  let nav = useNavigate();

  const goHome = () => {
    nav('/');
  }

  const goBoard = () => {
    nav('/board');
  }

  const goMyPage = () => {
    nav('/mypage')
  }
  const goLogin = () => {
    nav('/login');
  }
  return (
    <NavigateHeader>
      <NavItem onClick={goHome}>Home</NavItem>
      <NavItem onClick={goBoard}>Board</NavItem>
      <NavItem onClick={goMyPage}>MyPage</NavItem>
      <NavItem onClick={goLogin}>Login</NavItem>
      
    </NavigateHeader>
  )
}

export default Header;