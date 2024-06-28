import React from 'react';
import styled from 'styled-components';
import './App.css';
import { UserProvider } from './ContextAPI2';
import A from './A';
import B from './B';

// Box 컴포넌트 스타일 정의
const Box = styled.div`
  margin: 20px auto; // 상하 마진을 20px로, 좌우 마진을 auto로 설정하여 가운데 정렬
  display: flex;
  justify-content: center; // 가로 방향으로 중앙 정렬
  align-items: center; // 세로 방향으로 중앙 정렬
  width: 500px;
  height: 600px; // 높이를 200px로 조정
  color: white;
  font-family: 'Raleway';
  font-size: 2rem; // 폰트 크기를 2rem으로 조정
  --borderWidth: 8px;
  background: #1D1F20;
  position: relative;
  border-radius: var(--borderWidth);

  &:after {
    content: '';
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

function App() {
  return (
    <UserProvider>
      <Box>
        <A />
      </Box>
      <Box>
        <B />
      </Box>
    </UserProvider>
  );
}

export default App;