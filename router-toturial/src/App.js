import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import MyPage from './components/MyPage';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Routes>  
        <Route path ='/*' element={
          <div>
            <h1 style={{marginLeft: '20px'}}> 404</h1>
            <h3 style={{marginLeft: '20px'}}> 페이지가 존재하지 않습니다</h3>
          </div>
        }/>
        <Route path='/' element={<Home />} />
        <Route path='/board' element={<Board />} >
          <Route path=':num' element={<BoardContent />} />
        </Route>
        <Route path='/mypage' element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        
        

      </Routes>

    </>
  );
}

export default App;