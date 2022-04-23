import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

import Logo from "../img/logo.png"
import Perfil from "../img/perfil.png"
import Seta from "../img/seta.png"
import Icon from "../img/icon.png"
import Modal from "../components/categorias";
import BtnModal from "../components/addbuton"
import Todos from "../pages/todos"

const NavBar = styled.nav`
  width:100%;
  height:10vh;
  display:flex;
  justify-content:space-between;
`
const SubCont = styled.div`
  width:25%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin:0 0 0 2vw;
`
const ImageLg = styled.img`
  width:7vw;
  height:5vh;
  cursor:pointer;
`
const Text_h4 = styled.h4`
  cursor:pointer;
`
const Anchor = styled(Link)`
  text-decoration:none;

`
const SubCont2 = styled.div`
  width:55%;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
`
const BtnAdd = styled.button`
  width:9vw;
  height:4vh;
  background-color:#E71B27;
  border:none;
  border-radius:4px;
  cursor:pointer;

  :hover{
    box-shadow: 0 0 5px 5px #E71B27;
  }
`
const Search = styled.input`
  width:30vw;
  height:4vh;
  border:none;
  border-radius:4px;
  padding-left: 2.2vw;
  background-color:#2c2c2c;
  background-image: url(${Icon});
  background-repeat:no-repeat;
  background-position-y: center;
  background-position-x: 8px;
`
const User = styled.div``

const UserImg = styled.img``

const ImageSeta = styled.img`
  width:1vw;
  margin:0 0 1vh 1vw;
`
export default class App extends React.Component {

    state = {
        statemodal: false,
        butonmodal: false,
      }
          
      openmodal_cat = () => {
        this.setState({ statemodal: !this.state.statemodal })
      }
    
      openmodal_buton = () => {
        this.setState({ butonmodal: !this.state.butonmodal })
      }

    render() {
        return (
            <NavBar>
                <SubCont>     
                    <ImageLg src={Logo} alt="Logo todoflix" />
                    <Text_h4><Anchor to="/Todoflix">Inicio</Anchor></Text_h4>
                    <Text_h4 onClick={this.openmodal_cat}>Categorias<span>&#9663;</span></Text_h4>
                    {this.state.statemodal && <Modal />}
                </SubCont>

                <SubCont2>
                    <BtnAdd onClick={this.openmodal_buton}>Adicionar Filme</BtnAdd>
                    {this.state.butonmodal && <BtnModal />}
                    <Link to="/todos"><Search  type="text" placeholder="Pesquise" /></Link>
                    <User>
                        <UserImg src={Perfil} alt="icone de usuário" />
                        <ImageSeta src={Seta} />
                    </User>
                </SubCont2>
            </NavBar>
        )
    }
}