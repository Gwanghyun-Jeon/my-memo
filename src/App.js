import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Body = styled.div`
  background-color: yellow;
  height: 100% ;
  display: flex;
`;
const SearchBar = styled.input`
  margin: 0 auto;
  width: 50%;
`;
function oAuth() {
  axios("https://www.googleapis.com/auth/keep")
}

function App() {
  return (
    <Body>
      <SearchBar />
      <button onClick={oAuth}>login</button>
      {/* <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/mypage' element={<MyPage />}></Route>
      </Routes> */}
    </Body>
  );
}

export default App;
