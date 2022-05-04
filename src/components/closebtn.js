import React from "react";
import styled from "styled-components";

const BtnSe = styled.button`
    width:20px;
    height:20px;
    border-radius: 50%;
    border:1px solid #fff;
    background-color: transparent;
    z-index: 7;
    position:absolute;
`
const Button = ({ change}) => {
    return (
      <div>
        <BtnSe onChange={change}>X</BtnSe>
      </div>
    );
  };
  export default Button;