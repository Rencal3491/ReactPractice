import React from "react";
import { useLocation, Navigate } from "react-router-dom";

function MyPage() {
  const location = useLocation();
  const account = location.state?.account;

  if (!account) {
    // 로그인하지 않은 경우 홈으로 이동
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <h2>마이페이지</h2>
      <p>아이디: {account.id}</p>
      <p>이름: {account.name}</p>
      <p>나이: {account.age}</p>
      <p>설명: {account.description}</p>
    </div>
  );
}

export default MyPage;