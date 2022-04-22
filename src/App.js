import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import { createGlobalStyle } from "styled-components";

import Rota from "./components/routes"
import Header from "./pages/header"


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:white;
    font-family:arial, sans-serif;
  }
  body{
    width:100vw;
    background-color:#000;
  }
`

export default class App extends React.Component {

  

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Header/>
        <Rota />
      </Router>
    )
  }
}





