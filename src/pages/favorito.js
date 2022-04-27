import React from "react";
import styled from "styled-components"

import State from "../state.json"

const Container = styled.nav`
  width:100%;
  display:flex;
  flex-direction:column;
`
const Title = styled.h2`
    font-size:29px;
    font-weight:lighter;
    font-family:'Arial', sans-serif;
    margin:3vh 0 1vh 3vw;
`
const SubContainer = styled.nav`
  display:flex;
  flex-wrap:wrap;
  margin:0 0 0 2.4vw;
`
const Cont_map = styled.div`
    width:19vw;
    height:100%;
    margin:1vh 0 4vh 1vw;
`
const Img_slide = styled.img`
    width:100%;
    height:20vh;
    border-radius:5px;
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
        filmes:State,
        Filter:[]
    }

    render() {
        return (
            <Container>
                <Title>Favoritos</Title>
                <SubContainer>
                    {this.state.filmes.map((item) => (
                        <Cont_map>
                            <Img_slide src={item.poster} alt={`capa do filme ${item.title}`} />
                            <Title_slide>{item.title}</Title_slide>
                            <Text_slide>{item.overview}</Text_slide>
                        </Cont_map>
                    ))}
                </SubContainer>
            </Container>
        )
    }
}