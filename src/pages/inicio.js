import React from "react";
import styled from "styled-components"
import Carousel from "react-elastic-carousel";


import Squad from "../img/squad.jpg"
import Btn_fav from "../components/butonfav"
import { isDisabled } from "@testing-library/user-event/dist/utils";

const StyleCaro = {
    itemsToShow: 4,
    focusOnSelect: true,
    enableAutoPlay: true,
    autoPlaySpeed: 5000,
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
        filmeDestaque: {
            title: "O Esquadrão Suicida 2",
            situation: "Visto Recentemente",
            overview: "O governo envia os supervilões mais perigosos do mundo para a remota ilha de Corto Maltese, repleta de inimigos. Armados com armas de alta tecnologia, eles viajam pela selva perigosa em uma missão de busca e destruição com o Coronel Rick Flag."
        },
        filmes: [
            {
                title: "Shang-Chi e a Lenda dos Dez Anéis",
                poster: "https://files.tecnoblog.net/wp-content/uploads/2021/09/shang-chi.jpeg",
                overview: "Shang-Chi é o filho do líder de uma organização criminosa poderosa. O rapaz foi criado desde criança para ser um guerreiro, mas decidiu abandonar esse caminho e fugiu para viver uma vida pacífica. Porém, tudo isso muda quando ele é atacado por um grupo de assassinos e se vê forçado a enfrentar seu passado."
            },
            {
                title: "A Família Mitchell e a Revolta das Máquinas",
                poster: "https://i.ytimg.com/vi/q97ARSmKBU0/maxresdefault.jpg",
                overview: "Uma adolescente embarca em uma viagem com seus orgulhosos pais, irmão mais novo e cachorro amado para começar seu primeiro ano na faculdade. Mas seus planos de se unir como uma família logo são interrompidos quando os dispositivos eletrônicos do mundo se revoltam e rapidamente organizam um apocalipse robô. Agora, só a estranha família Mitchell pode salvar a humanidade."
            },
            {
                title: "Raya e o Último Dragão",
                poster: "https://lumiere-a.akamaihd.net/v1/images/1920x1080_logo_355fcbfc.png?region=0,0,1920,1080&width=960",
                overview: "Há muito tempo, no mundo de fantasia de Kumandra, humanos e dragões viviam juntos em harmonia. Mas quando uma força maligna ameaçou a terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra despedaçada e seu povo dividido."
            },
            {
                title: "Homem-Aranha: Sem Volta para Casa",
                poster: "https://multiversonoticias.com.br/wp-content/uploads/2022/02/Homem-Aranha-1.jpg",
                overview: "O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta."
            },
            {
                title: "Ataque dos Cães",
                poster: "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/02/08122743/ataque-dos-caes_ccexpress.jpeg",
                overview: "Um fazendeiro durão trava uma guerra de ameaças contra a nova esposa do irmão e seu filho adolescente, até que antigos segredos vêm à tona."
            },
            {
                title: "Em um Bairro de Nova York",
                poster: "https://www.arrobanerd.com.br/wp-content/uploads/2021/06/em-um-bairro-de-nova-york-cri%CC%81tica.jpg",
                overview: "O longa acompanha alguns dias de uma comunidade latina na periferia de Nova York. A partir do protagonista Usnavi, dono de uma mercearia local, a história retrata um grupo em busca de seus sonhos."
            },
            {
                title: "Vingadores: Guerra Infinita",
                poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/1/5/4/0/1540f81fee974bffacdfa96420555d37.jpg",
                overview: "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."
            },
            {
                title: "Vingadores: Ultimato",
                poster: "https://www.blogsoestado.com/marciohenrique/files/2019/09/VINGADORES-ULTIMATO-2019.jpg",
                overview: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco."
            },
            {
                title: "Velozes e Furiosos 9",
                poster: "https://midias.agazeta.com.br/2021/06/22/filme-velozes-e-furiosos-9-542213-article.jpg",
                overview: "Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo passado de Dom: seu irmão desaparecido Jakob, que retorna e está trabalhando ao lado de Cipher. Cabe a Dom reunir a equipe novamente para enfrentá-los."
            },
            {
                title: "Velozes & Furiosos: Hobbs & Shaw",
                poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/8/4/e/6/84e6c0f13dae4998b2d2ad1182b9dde2.jpg",
                overview: "O corpulento policial Luke Hobbs se junta ao fora da lei Deckard Shaw para combater um terrorista geneticamente melhorado que tem força sobre-humana."
            },
            {
                title: "Gente Grande",
                poster: "https://spotlight-br.cdn.telefonica.com/customer/v1/source?image=http%3A%2F%2Fmedia.gvp.telefonica.com%2Fstoragearea0%2FIMAGES%2F00%2F03%2F66%2F3669979_8ECD1336937D8BDF.jpg&width=1400&height=787&resize=CROP&format=JPEG",
                overview: "A morte do treinador de basquete da infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade."
            },
        ]
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
                    </Text_Div>
                </SubCont1>
                <SubCont2>
                    <Title>Destaques</Title>
                    <Carousel {...StyleCaro}>
                        {this.state.filmes.map((item) => (

                            <Cont_map>
                                <Img_slide src={item.poster} alt={`capa do filme ${item.title}`} />
                                <Title_slide>{item.title}</Title_slide>
                                <Text_slide>{item.overview}</Text_slide>
                            </Cont_map>

                        ))}
                    </Carousel>
                </SubCont2>
            </Container>
        )
    }
}