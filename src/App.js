import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components";


import Inicio from "./pages/inicio"
import Header from "./pages/header"
import Todos from "./pages/todos"
import Favoritos from "./pages/favorito"
import Vistos from "./pages/vistos"
import Adicionados from "./pages/adicionados"



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
        <Header />
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/vistos" element={<Vistos />} />
          <Route path="/adicionados" element={<Adicionados />} />
        </Routes>
      </Router>
    )
  }
}





