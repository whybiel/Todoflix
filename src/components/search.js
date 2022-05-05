import React from "react";
import styled from "styled-components";

import Movies from "../state.json"
import Icon from "../img/icon.png"

const Container = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  background-color: #000;
  z-index: 5;
`
const Subcont = styled.div`
  width:94%;
  display: flex;
  justify-content: space-between;
  padding:2vh 2vw 2vh 2vw;
`
const Search = styled.input`
    width:30.5vw;
    height:4vh;
    border:none;
    border-radius:4px;
    padding-left: 2.2vw;
    background-color:#2c2c2c;
    background-image: url(${Icon});
    background-repeat:no-repeat;
    background-position-y: center;
    background-position-x: 8px;
    position:absolute;
    top:3vh;
    left:58vw;
`
const Contmap = styled.div`
    width:20vw;
    height:100%;
    position:relative;
    margin:0 0 0 2.4vw;
`
const Imgslide = styled.img`
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
    left:18.5vw;


    &:focus{
        background-color:red;
    }
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
const Titleslide = styled.h2`
    font-size:16px;
    margin:1vh 0 1vh 0;
`
const Textslide = styled.p`
    font-size:12px;
    text-align:left;
`
const BtnSe = styled.button`
    width:25px;
    height:25px;
    border-radius: 50%;
    border:1px solid #fff;
    background-color: transparent;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`
export default class App extends React.Component {
    state = {
        filmes: Movies,
        Filter: [],
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
                Filter: filmes
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
        const {close} = this.props
        return (
            <Container>
                <Subcont>
                    <h1>Pesquisa</h1>
                    <BtnSe onClick={close}>X</BtnSe>
                </Subcont>
                <Search type="text" placeholder="Pesquise" onChange={this.filterFilms} />
                {this.state.Filter.map((item) => (
                    <Contmap>
                        <Imgslide src={item.poster} alt={`capa do filme ${item.title}`} />
                        <Btn title="Favorito">&#10084;</Btn>
                        <NameBox >
                            <Titleslide>{item.title}</Titleslide>
                            <div style={{ width: "60px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <p style={{ padding: "0 0.5vw 0 0.5vw" }}>{item.nota}/5</p>
                                <Svg style={{ padding: "0 0vw 0.5vh 0" }} id="IconThumbsUpFilled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <rect id="Box" width="17" height="17" fill="none" />
                                    <path id="Path1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.nota >= 5 ? { fill: '#0B3B0B' } : item.nota === 4 ? { fill: '#64FE2E' } : item.nota === 3 ? { fill: 'yellow' } : { fill: 'red' }} />
                                </Svg>
                            </div>
                        </NameBox>
                        <Textslide>{item.overview}</Textslide>
                    </Contmap>

                ))}


            </Container>
        )
    }
}