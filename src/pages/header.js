import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

import Logo from "../img/logo.png"
import Perfil from "../img/perfil.png"
import Icon from "../img/icon.png"
import Seta from "../img/seta.png"
import Modal from "../components/categorias";
import BtnModal from "../components/addbuton"
import State from "../state.json"


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
const Container = styled.nav`
  display:flex;
  flex-wrap:wrap;
  margin:0 0 0 2.4vw;
`
const Cont_map = styled.div`
    width:19vw;
    height:100%;
    margin:1vh 0 4vh 1vw;
    position:relative;
`
const Img_slide = styled.img`
    width:100%;
    height:20vh;
    border-radius:5px;
`
const Btn = styled.button`
    width:20px;
    height:20px;
    border:none;
    background-color:gray;
    border-radius:50%;
    font-size:px;
    cursor:pointer;
    margin:1vh 0 2vh 0;
    position:absolute;
    left:17vw;


    &:focus{
        background-color:red;
    }
`
const Title_slide = styled.h2`
    font-size:15px;
    margin:1vh 0 1vh 0;
`
const NameBox = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Svg = styled.svg`
    width:19px;
    height:20px;
`

const Text_slide = styled.p`
    font-size:12px;
    text-align:left;
`
export default class App extends React.Component {

  state = {
    statemodal: false,
    butonmodal: false,
    filmes: State,
    Filter: [],
    convert:[]
  }
  async componentDidMount() {
    this.movies()
  }
  movies = async () => {
    const FilmsFilter = this.setState({
      Filter: this.state.filmes
    })
  }
  filterFilms = (e) => {
    const { filmes } = this.state

    if (e.target.value === "") {
      this.setState({
        Filter: FilmsConvert
      })
      return
    }
    const FilmsConvert = filmes.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true
      }
    })

    this.setState({
      Filter: FilmsConvert
    })
  }
  render() {
    return (
      <>
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
            <Search type="text" placeholder="Pesquise" onChange={this.filterFilms} />
            <User>
              <UserImg src={Perfil} alt="icone de usuário" />
              <ImageSeta src={Seta} />
            </User>
          </SubCont2>
        </NavBar>
        <Container>
          {this.state.convert.map((item) => (
            <Cont_map>
              <Img_slide src={item.poster} alt={`capa do filme ${item.title}`} />
              <Btn title="Favorito">&#10084;</Btn>
              <NameBox >
                <Title_slide>{item.title}</Title_slide>
                <div style={{ width: "60px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ padding: "0 0.5vw 0 0.5vw" }}>{item.nota}/5</p>
                  <Svg style={{ padding: "0 0vw 0.5vh 0" }} id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                    <rect id="Box" width="17" height="17" fill="none" />
                    <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.nota >= 5 ? { fill: '#0B3B0B' } : item.nota === 4 ? { fill: '#64FE2E' } : item.nota === 3 ? { fill: 'yellow' } : { fill: 'red' }} />
                  </Svg>
                </div>
              </NameBox>
              <Text_slide>{item.overview}</Text_slide>
            </Cont_map>

          ))}
        </Container>
      </>

    )
  }
}