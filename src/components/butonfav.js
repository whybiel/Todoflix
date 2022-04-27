import React from "react";
import styled from "styled-components"


const Btn = styled.button`
    width:2vw;
    height:3.5vh;
    border:none;
    background-color:gray;
    border-radius:50%;
    font-size:20px;
    cursor:pointer;
    margin:1vh 0 2vh 0;

    &:focus{
        background-color:red;
    }
`



export default class App extends React.Component{

    

    render(){
        return(
            <>
            <Btn title="Favorito">&#10084;</Btn>
            </>
        )
    }
}