import React from "react";
import { createGlobalStyle } from "styled-components";
import Banner from "./components/banner/Banner";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./page/Main";
import { RecoilRoot } from "recoil";
const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding:0px;
    margin: 0px;
  }
`

function App() {
  return (
    <RecoilRoot>
    <GlobalStyle />
    {
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </BrowserRouter>
      
    }
    </RecoilRoot>
  );
}

export default App;
