import React from "react";
import styled from "styled-components"
import Rating from "react-rating-stars-component"


import Select from "../img/imgselect.png"
const StyleRat = {
    count: 5,
    size: 40,
    activeColor: "red",
    color: "#B1B1B1",
    char: "☆"
}

const Container = styled.div`
    width:60vw;
    height:80vh;
    background-color:#000;
    border-radius:10px;
    border: 1px solid #808080;
    position:absolute;
    top:10vh;
    left:21vw;
    z-index:5;
    font-family:'Arial';
    font-weight:600;
    font-size:15px;
    display: flex;
`
const SubContainer = styled.div`
    width:26vw;
    display:flex;
    flex-direction:column;
    margin: 0 0 0 3vw;
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
    margin:1vh 0 4vh 0;
    color:#fff;
    border-radius:4px;
    border:none;
    background-color:#2C2C2C;
`
const TextArea = styled.textarea`
    width:25vw;
    height:8vh;
    margin:1vh 0 4vh 0;
    color:#fff;
    border-radius:4px;
    border:none;
    background-color:#2C2C2C;
`
const InpRadio = styled.input`
    size:20px;
    margin:2vh 0 4vh 0vw;
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
    position: absolute;
    left:55vw;
    top:2vh;
`

const SubContainerImg = styled.div` 
    width: 27vw;
    height: 40vh;
    margin:15vh 0 0 2vw ;
`
const SubContainerBtn = styled.div`
    width:20vw;
    position: absolute;
    bottom:4vh;
    left:22vw;
`
const BtnCancel = styled.button`
    width:8vw;
    height:5vh;
    border-radius:5px;
    color:#fff;
    background-color: transparent;
    cursor: pointer;
`
const BtnConfirm = styled.button`
    width:8vw;
    height:5vh;
    border-radius:5px;
    color:#fff;
    background-color:#E71B27;
    cursor: pointer;
`


export default class App extends React.Component {

    state = {
        overviewLenght: 0
    }

    handleOverviewChange = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                overviewLenght: e.target.value.length
            })
        } else {
            this.setState({
                overviewLenght: 0
            })
        }
    };

    render() {
        const { close } = this.props
        return (
            <Container>
                <form action="">
                    <SubContainer>
                        <BtnSe onClick={close}>X</BtnSe>
                        <Title>Adicionar Filme</Title>
                        <label for="name">Nome</label>
                        <InpName id="name" type="text" />
                        <div style={{ width: "25vw", display: "flex", "justify-content": "space-between" }}><label for="descricao">Descrição </label><p>{`${this.state.overviewLenght}/ 200`}</p></div>
                        <TextArea onChange={this.handleOverviewChange} id="descricao" name="descricao" maxLength={200} />
                        <div>
                            <legend>Status</legend>
                            <InpRadio id="assisti" type="radio" name="status" value="Assisti" />
                            <label for="assisti">Já assisti</label>
                            <InpRadio style={{ margin: "0 0 0 2vw" }} id="não assistido" type="radio" name="status" value="Não assisti" />
                            <label for="não assistido" >Ainda não assisti</label>
                        </div>
                        <label>Nota</label>
                        <div style={{ display: "flex", alignItems: "end", padding: "0 0 0 1vw" }}>
                            <Rating {...StyleRat} />
                            <p style={{ padding: "0 0 0.5vh 1vw" }}>(0/5)</p>
                        </div>
                    </SubContainer>
                </form>
                <SubContainerImg>
                    <form>
                        <p>Imagem da Capa</p>
                        <img style={{ border: "1px solid gray", borderRadius: "5px", margin: "1vh 0 1vh 0" }} src={Select} />
                        <input style={{ width: "15vw", height: "3.8vh", borderRadius: "5px", color: "#000", border: "none" }} placeholder="Cole a url aqui" type="text" />
                    </form>
                </SubContainerImg>
                <SubContainerBtn>
                    <BtnCancel onClick={close}>Cancelar</BtnCancel>
                    <BtnConfirm>Confirmar</BtnConfirm>
                </SubContainerBtn>
            </Container>
        )
    }
}