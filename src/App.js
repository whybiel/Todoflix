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
    background-color:#000;
  }
  ::-webkit-scrollbar{
    width:5px;
  }
  ::-webkit-scrollbar-track{
    background:#000;
  }
  ::-webkit-scrollbar-thumb{
    width:2px;
    background: #E71B27;
    border-radius: 5px;
  }
`

export default class App extends React.Component {

  state = {
    
}


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





