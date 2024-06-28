import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountData } from "./account";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const account = accountData.find(
      (acc) => acc.id === id && acc.password === password
    );

    if (account) {
      // 로그인 성공 시 MyPage로 이동
      navigate("/mypage", { state: { account } });
    } else {
      // 로그인 실패 시 알림 표시
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Login;