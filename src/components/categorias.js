import React from "react";
import styled from "styled-components"
import {
  Link
} from "react-router-dom"

const Container = styled.div`
    width:10vw;
    height:18vh;
    background-color:#000;
    position:absolute;
    top:6.5vh;
    left:18vw;
`
const List = styled.ul`
  width:100%;
  height:100%;
  list-style:none;
`
const Item = styled.li`
  padding:1.5vh 0 0 1vw;
  cursor:pointer;
`
const Anchor = styled(Link)`
  text-decoration:none;

  &:hover{
    font-weight:bold;
    color:red;
  }
`

export default class App extends React.Component {

  render() {
    return (
      //<Router>
        <Container>
          <List>
            <Item>
              <Anchor to="/todos">Todos</Anchor></Item>
            <Item>
              <Anchor to="/favoritos">Favoritos</Anchor></Item>
            <Item>
              <Anchor to="/vistos">Já vistos</Anchor></Item>
            <Item>
            <Anchor to="/adicionados">Adicionados</Anchor></Item>
          </List>
        </Container>
      //</Router>
    )
  }
}