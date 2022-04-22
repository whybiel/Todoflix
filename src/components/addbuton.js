import React from "react";
import styled from "styled-components"
import Rating from "react-rating-stars-component"

const Container = styled.div`
    width:58vw;
    height:80vh;
    background-color:blue;
    border-radius:10px;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #808080;
    position:absolute;
    top:10vh;
    left:21vw;
    z-index:5;
`

export default class App extends React.Component{

    

    render(){
        return(
            <Container>
            <form action="">
                <h2>Adicionar Filme</h2>
                <label>Nome: <input type="text"/></label>
                <label>Descrição: <textarea name="descricao" maxlength="200" data-ls-module="charCounter"/></label>
                <legend>Status</legend>
                    <input id="assisti" type="radio" name="status" value="Assisti"/>
                    <label for="assisti">Já assisti</label>
                    <input id="não assistido" type="radio" name="status" value="Não assisti"/>
                    <label for="não assistido" >Ainda não assisti</label>
                <Rating/>
            </form>
            </Container>
        )
    }
}