import React from "react"
import styled from "styled-components"

import State from "../state.json"
import Icon from "../img/icon.png"


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

const Input = styled.input`
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
position:absolute;
top:3vh;
left:59.6vw;
`

export default class App extends React.Component {
    state = {
        filmes: State,
        Filter: []
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
        return (
            <Container>
                
                <Title>Filmes</Title>
                <SubContainer>
                    {this.state.Filter.map((item) => (
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