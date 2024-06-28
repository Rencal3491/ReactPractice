import React, { createContext, useContext, useEffect, useReducer } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';
import roopImage from './roop.gif'; // 이미지 파일 import

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const textAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientDiv = styled.div`
  height: auto;
  width: auto;
  background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 5s linear infinite;
  
  span {
    display: inline-block;
    background-image: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${textAnimation} 1s linear infinite;
  }
`;

const GradientButton = styled.button`
  height: auto;
  width: auto;
  background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 1s linear infinite;
  
  span {
    display: inline-block;
    background-image: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${textAnimation} 0.6s linear infinite;
  }
`;

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// 3. Context API 생성
const PostStateContext = createContext();
const PostDispatchContext = createContext();

// 4. Provider 생성 및 설정
const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        {children}
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
};

const Posts = () => {
  const state = useContext(PostStateContext);
  const dispatch = useContext(PostDispatchContext);

  const fetchPosts = () => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Limit the posts to the first 20
        const limitedPosts = data.slice(0, 20);
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: limitedPosts });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleReload = () => {
    fetchPosts();
  };

  if (state.error) {
    return (
      <div>
        <p>Error: {state.error}</p>
      </div>
    );
  }

  if (state.loading) {
    return <h1>로딩중</h1>;
  }

  return (
    <GradientDiv>
      <img src={roopImage} alt="Roop" width="600px" /> {/* 이미지 추가 */}
      <GradientButton onClick={handleReload}>다시 불러오기</GradientButton>
      {state.posts.map(post => (
        <div key={post.id} style={{ backgroundColor: '#12090f' }}>
          <span>[{post.id}] [{post.userId}] [{post.title}]</span>
        </div>
      ))}
    </GradientDiv>
  );
};

const App = () => {
  return (
    <PostProvider>
      <Posts />
    </PostProvider>
  );
};

export default App;