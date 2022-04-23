import React from "react";
import styled from "styled-components"

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
        filmes: [
            {
                title: "O Esquadrão Suicida 2",
                poster: "https://i.uai.com.br/KWiScY_twYqSXcFq4j8W0i5SzCg=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2021/09/12/278481/20210912144426131478a.jpeg",
                overview: "O governo envia os supervilões mais perigosos do mundo para a remota ilha de Corto Maltese, repleta de inimigos. Armados com armas de alta tecnologia, eles viajam pela selva perigosa em uma missão de busca e destruição com o Coronel Rick Flag."
            },
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
            {
                title: "Batman",
                poster:"https://cdn.ome.lt/d1WxTqmMEO3bA8lIHgGF_fPjZj0=/1200x630/smart/extras/conteudos/the_batman.jpg",
                overview: "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
            },
            {
                title: "Coringa",
                poster: "https://wp.ufpel.edu.br/empauta/files/2019/10/Coringa.retang.jpg",
                overview: "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante."
            },
            {
                title: "Hunter x Hunter: The Last Mission",
                poster:"https://www.justwatch.com/images/backdrop/180763325/s640/hunter-x-hunter-the-last-mission",
                overview: "Gon e Killua enfrentam inimigos do passado quando Jed aparece decidido a divulgar o histórico de operações secretas dos Hunters."
            },
            {
                title:"Red: Crescer é uma fera",
                poster: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C2B147C9894D2972A53DE0663537606531C8245E379560BDD384BEDB861515E/scale?width=1200&aspectRatio=1.78&format=jpeg",
                overview: "Mei é uma garota que vive o auge de seus 13 anos no começo dos anos 2000. Inexplicavelmente, ela passa a se transformar num gigante panda vermelho sempre que fica nervosa ou animada (o que é uma constante)."
            },
            {
                title:"Doutor Estranho no Multiverso da Loucura",
                poster:"http://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-2.jpg",
                overview: "Doutor Estranho rumo ao desconhecido. Além de receber ajuda de novos aliados místicos e outros já conhecidos do público, o personagem atravessa as realidades alternativas incompreensíveis e perigosas do Multiverso para enfrentar um novo e misterioso adversário."
            },
            {
                title:"Your Name",
                poster:"https://wallpapers.com/images/high/kimi-no-na-wa-taki-poster-f16a4cccypn81lzw.jpg",
                overview: "Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos."
            },
            {
                title:"Bohemian Rhapsody",
                poster:"https://i2.wp.com/linkezine.com.br/wp-content/uploads/2018/11/bohemian-rhapsody-filme.jpeg?fit=1920%2C1080",
                overview: "Freddie Mercury, Brian May, Roger Taylor e John Deacon formam a banda de rock Queen em 1970. Quando o estilo de vida agitado de Mercury começa a sair de controle, o grupo precisa encontrar uma forma de lidar com o sucesso e os excessos de seu líder."
            },
            {
                title:"Encanto",
                poster:"https://www.eusemfronteiras.com.br/wp-content/uploads/2022/02/poster-encanto-e1645042210615-810x504.jpg",
                overview: "Encanto da Walt Disney Animation Studios conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. "
            },
            {
                title:"Pantera Negra",
                poster:"https://www.agitossp.com.br/wp-content/uploads/2019/01/panteranegra-696x364.jpg",
                overview: "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados."
            },
            {
                title:"Moana",
                poster:"https://uploads.jovemnerd.com.br/wp-content/uploads/2016/09/moana-disney-mar-1210x544.jpg",
                overview:"Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos."
            },
            {
                title:"Um Lugar Silencioso",
                poster:"https://i0.wp.com/cinestera.com.br/wp-content/uploads/2019/01/um-lugar-silencioso-cr%C3%ADtca-.jpg?fit=800%2C445&ssl=1",
                overview:"Em uma fazenda nos Estados Unidos, uma família do Meio-Oeste é perseguida por uma entidade fantasmagórica assustadora. Para se protegerem, eles devem permanecer em silêncio absoluto, a qualquer custo, pois o perigo é ativado pela percepção do som."
            }
        ],
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
                <Title>Todos</Title>
                
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