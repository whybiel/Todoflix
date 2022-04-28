import React from "react";
import styled from "styled-components"
import Carousel from "react-elastic-carousel";


import Squad from "../img/squad.jpg"
import Btn_fav from "../components/butonfav"
import Destaque from "../destaque.json"


const StyleCaro = {
    itemsToShow: 4,
    focusOnSelect: true,
    enableAutoPlay: true,
    autoPlaySpeed: 7000,
    itemPadding: [0, 6],
    pagination: false,
    enableMouseSwipe: false,
    outerSpacing: 35
}

const Container = styled.section`
    width:100%;
    height:90vh;
`
const SubCont1 = styled.div`
    width:81%;
    height:48%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
const Img_Dest = styled.img`
    height:30vh;
    border-radius:5px;
`
const Text_Div = styled.div`
    width:40vw;
    height:30vh;
`
const Sit_Txt = styled.h5`
    font-size:16px;
    margin:0vh 0 1vh 0;
`
const Title_Txt = styled.h2`
    font-size:40px;
    margin:0 0 1vh 0;
`
const Text = styled.p`
    width:30vw;
    text-align:left;
    font-size:14px;
    margin:0 0 1vh 0;
`
const SubCont2 = styled.div`
    width:100%;
    height:50%;
`
const Title = styled.h2`
    font-size:18px;
    margin:0 0 2vh 3.6vw;
`
const Cont_map = styled.div`
    width:50vw;
    height:100%;
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
const Title_slide = styled.h2`
    font-size:16px;
    margin:1vh 0 1vh 0;
`
const Text_slide = styled.p`
    font-size:12px;
    text-align:left;
`

export default class App extends React.Component {

    state = {
        filmeDestaque: {
            title: "O Esquadrão Suicida 2",
            situation: "Visto Recentemente",
            overview: "O governo envia os supervilões mais perigosos do mundo para a remota ilha de Corto Maltese, repleta de inimigos. Armados com armas de alta tecnologia, eles viajam pela selva perigosa em uma missão de busca e destruição com o Coronel Rick Flag.",
            nota: 5
        },
        filmes: Destaque
    }

    render() {

        let { filmeDestaque } = this.state
        return (
            <Container>
                <SubCont1>
                    <Img_Dest src={Squad} alt="poster do filme: esquadrão suicida 2" />
                    <Text_Div>
                        <Btn_fav />
                        <Sit_Txt>{filmeDestaque.situation}</Sit_Txt>
                        <Title_Txt>{filmeDestaque.title}</Title_Txt>
                        <Text>{filmeDestaque.overview}</Text>
                        <p style={{padding:"0 0.5vw 0 0.5vw"}}>{this.state.filmeDestaque.nota}/5</p>
                        <Svg style={{ padding: "0 0vw 0.5vh 0" }} id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <rect id="Box" width="17" height="17" fill="none" />
                            <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={this.state.filmeDestaque.nota >= 5 ? { fill: '#0B3B0B' } : this.state.filmeDestaque.nota === 4 ? { fill: '#64FE2E' } : this.state.filmeDestaque.nota === 3 ? { fill: 'yellow' } : { fill: 'red' }} />
                        </Svg>
                    </Text_Div>
                </SubCont1>
                <SubCont2>
                    <Title>Destaques</Title>
                    <Carousel {...StyleCaro}>
                        {this.state.filmes.map((item) => (

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
                    </Carousel>
                </SubCont2>
            </Container>
        )
    }
}