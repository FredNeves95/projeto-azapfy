import React, { useState } from "react";
import styled from "styled-components";

import Card from "./Card";
import ModalVencedor from "./ModalVencedor";
import ModalEmpate from "./ModalEmpate";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    min-height:100vh;
    justify-content: space-around;
`

const CardContainer = (props) => {

    const herois = props.herois;
    const [personagem1, setPersonagem1] = useState(undefined);
    const [personagem2, setPersonagem2] = useState(undefined);
    const [modal, setModal] = useState(false);
    const [vencedor, setVencedor] = useState(undefined);
    const [comparacao, setComparacao] = useState(false);


    // Função que recebe os dados dos herois selecionados e retorna o modal
    const escolherHeroi = (heroi) => {
        if (!personagem1) {
            setPersonagem1(heroi);
        } else if (personagem1 === heroi) {
            alert("Não é possível selecionar o mesmo personagem.");
        } else if (personagem1 && !personagem2) {
            setPersonagem2(heroi);
            setModal(true);
        }
    }

    // Função que reinicia os estados depois que o modal é fechado
    const encerrarBatalha = () => {
        setPersonagem1(undefined);
        setPersonagem2(undefined);
        setModal(false);
        setComparacao(false);
        setVencedor(undefined);
    }

    if (!personagem2) {
        // Enquanto o personagem2 não for selecionado, o modal não será exibido na tela
        return (
            <Container>
                {herois
                    .filter(item => {
                        return item.name.toLowerCase().includes(props.filtro.toLowerCase());
                    })
                    .map(item => {
                        return <Card key={item.id} herois={item} escolherHeroi={() => escolherHeroi(item)} />;
                    })
                }

            </Container>
        )

    } else if (personagem1 && personagem2) {
        // Função que recebe os valores do powerstats, soma e retorna o vencedor
        const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
        const skillPersonagem1 = sumValues(personagem1.powerstats);
        const skillPersonagem2 = sumValues(personagem2.powerstats);

        // Condicional que limita a seleção somente para 2 personagens distintos
        if (skillPersonagem1 > skillPersonagem2 && comparacao === false) {
            setVencedor(personagem1);
            setComparacao(true);
        } else if (skillPersonagem1 < skillPersonagem2 && comparacao === false) {
            setVencedor(personagem2);
            setComparacao(true);
        } else if (skillPersonagem1 === skillPersonagem2 && comparacao === false) {
            setVencedor("empate");
            setComparacao(true);
        }


        // Função que seleciona a imagem que será retornada em cada item dos powerstats, após comparação 
        // entre os dois participantes do duelo 
        const vitoriaOuDerrota = (item1, item2) => {
            if (item1 > item2) {
                return <img src="https://img.icons8.com/color/18/000000/plus--v1.png" alt="maior"/>;
            } else if (item1 < item2) {
                return <img src="https://img.icons8.com/color/18/000000/minus.png" alt="menor"/>;
            } else {
                return <img src="https://img.icons8.com/office/18/000000/equal-sign.png" alt="igual"/>;
            }
        }

        if (vencedor && vencedor !== "empate") {
            // Se houve vencedor, retorna o modal que apresenta o vencedor
            return (
                <Container>
                    {herois
                        .filter(item => {
                            return item.name.toLowerCase().includes(props.filtro.toLowerCase());
                        })
                        .map(item => {
                            return <Card key={item.id} herois={item} teste={() => escolherHeroi(item)} />;
                        })
                    }
                    <ModalVencedor modal={modal} encerrarBatalha={encerrarBatalha} vencedor={vencedor} personagem1={personagem1} skillPersonagem1={skillPersonagem1} personagem2={personagem2} skillPersonagem2={skillPersonagem2} vitoriaOuDerrota={vitoriaOuDerrota} />
                </Container>
            )
        } else if (vencedor && vencedor === "empate") {
            // Se houve empate, retorna o modal de empate
            return (
                <Container>
                    {herois
                        .filter(item => {
                            return item.name.toLowerCase().includes(props.filtro.toLowerCase());
                        })
                        .map(item => {
                            return <Card key={item.id} herois={item} teste={() => escolherHeroi(item)} />;
                        })
                    }
                    <ModalEmpate modal={modal} encerrarBatalha={encerrarBatalha} vencedor={vencedor} personagem1={personagem1} skillPersonagem1={skillPersonagem1} personagem2={personagem2} skillPersonagem2={skillPersonagem2} vitoriaOuDerrota={vitoriaOuDerrota} />
                </Container>
            )
        }
        else {
            return <></>
        }
    }
}

export default CardContainer