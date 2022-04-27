import React from "react";
import styled from "styled-components"
import Rating from "react-rating-stars-component"

const Container = styled.div`
    width:58vw;
    height:80vh;
    background-color:#000;
    border-radius:10px;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #808080;
    position:absolute;
    top:10vh;
    left:21vw;
    z-index:5;
    font-family:'Arial';
    font-weight:600;
    font-size:15px;
`
const SubContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    border:3px solid red;
`

const Title = styled.h2`
    font-family:'Arial';
    font-size:29px;
    font-weight:100;
    margin:6vh 0 5vh 0vw;
`
const InpName = styled.input`
    width:25vw;
    height:4vh;
    margin:1vh 0 3vh 0;
    color:#000;
    border-radius:4px;
    border:none;
    background-color:#2C2C2C;
`
const TextArea = styled.textarea`
    width:25vw;
    height:8vh;
    margin:1vh 0 3vh 0;
    color:#000;
    border-radius:4px;
    border:none;
    background-color:#2C2C2C;
`
const InpRadio =styled.input`
    
    margin:2vh 0 3vh 0vw;

    ::radio{
        background-color: transparent; 
        border: 1px solid #B1B1B1;
        opacity: 1;
    }
`


export default class App extends React.Component {

    state = {
        overviewLenght: 0
    }

    handleOverviewChange = (e) => {
        if(e.target.value.length > 0){
            this.setState({
                overviewLenght: e.target.value.length
            })
        }else{
            this.setState({
                overviewLenght: 0
            })
        }
      };

    render() {
        return (
            <Container>
                <form action="">
                    <SubContainer>
                        <Title>Adicionar Filme</Title>
                        <label for="name">Nome</label>
                        <InpName required id="name" type="text" />
                        <div style={{width:"25vw",display: "flex", "justify-content": "space-between"}}><label for="descricao">Descrição </label><p>{`${this.state.overviewLenght}/ 200`}</p></div>
                        <TextArea onChange={this.handleOverviewChange} id="descricao" name="descricao" maxLength={200} />
                        <div>
                        <legend>Status</legend>
                        <InpRadio  id="assisti" type="radio" name="status" value="Assisti" />
                        <label for="assisti">Já assisti</label>
                        <InpRadio style={{margin:"0 0 0 2vw"}} id="não assistido" type="radio" name="status" value="Não assisti" />
                        <label for="não assistido" >Ainda não assisti</label>
                        </div>
                        <Rating />
                    </SubContainer>
                </form>
            </Container>
        )
    }
}