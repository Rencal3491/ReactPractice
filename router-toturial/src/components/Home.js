import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>홈 페이지</h2>
      <p>지금 보여지는 곳은 홈입니다. 사이트 대문이죠!!!</p>
      <ul>
        <li>
          <Link to="/board">게시판</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;