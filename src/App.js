import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Body = styled.div`
  background-color: yellow;
  height: 80vh;
  display: flex;
`;
const SearchBar = styled.input`
  margin: 10px auto;
  width: 50%;
  height: 2.5vh;
`;

function App() {
  return (
    <Body>
      <SearchBar />
      {/* <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/mypage' element={<MyPage />}></Route>
      </Routes> */}
    </Body>
  );
}

export default App;
