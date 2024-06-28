import React from "react";

// input태그 2개(계정,이메일),버튼(추가 처리... )
function CreateUser({username, email, onChange, onCreate}) {
  return(
    <div>
      <input 
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

// 3rd day : React.memo를 사용한 컴포넌트 리렌더링 방지
//     컴포넌트의 리렌더링 성능 최적화를 위한 React.memo 함수.
//     컴포넌트에서 리렌더가 필요한 경우에만 리렌더링하도록 설정됨. 

export default React.memo(CreateUser);