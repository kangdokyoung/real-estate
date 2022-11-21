import React from "react";
import { createGlobalStyle } from "styled-components";
import Banner from "./components/banner/Banner";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding:0px;
    margin: 0px;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    {
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
      
    }
    </>
  );
}

export default App;
