import React, { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import { Box } from "@mui/material";

import Card from "./Card";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    min-height:100vh;
    justify-content: space-around;
`
const ModalContainer = styled.div`
    background-color: black;
    color: white;    
    display: flex;
    flex-direction: column;
    text-align: center;

    hr{
        width: 80%;
    }
    
    .duelo{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .stats{
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3{
                margin: 8px 180px;
            }

            .compare{
                display: flex;
                align-items: center;
            }
        }
    }
`

const Vencedor = styled.h1` 
color: green;
span{
    color: white;
}
`
const CardContainer = (props) => {

    const herois = props.herois


    const [personagem1, setPersonagem1] = useState(undefined)
    const [personagem2, setPersonagem2] = useState(undefined)
    const [modal, setModal] = useState(false)
    const [vencedor, setVencedor] = useState(undefined)
    const [comparacao, setComparacao] = useState(false)

    // console.log("Personagem 1:", personagem1);
    // console.log("Personagem 2:", personagem2);
    console.log("Vence", vencedor)

    const escolherHeroi = (heroi) => {
        if (!personagem1) {
            setPersonagem1(heroi)
        } else if (personagem1 === heroi) {
            alert("Não é possível selecionar o mesmo personagem.")
        } else if (personagem1 && !personagem2) {
            setPersonagem2(heroi)
            setModal(true)
        }
    }

    const encerrarBatalha = () => {
        setPersonagem1(undefined);
        setPersonagem2(undefined);
        setModal(false);
        setComparacao(false);
        setVencedor(undefined);
    }

    const vitoriaOuDerrota = (item1, item2) => {
        if (item1 > item2) {
            return <img src="https://img.icons8.com/color/18/000000/plus--v1.png" />
        } else if (item1 < item2) {
            return <img src="https://img.icons8.com/color/18/000000/minus.png" />
        } else {
            return <img src="https://img.icons8.com/office/18/000000/equal-sign.png" />
        }
    }

    if (!personagem2) {
        return (
            <Container>
                {herois
                    .filter(item => {
                        return item.name.toLowerCase().includes(props.filtro.toLowerCase())
                    })
                    .map(item => {
                        return <Card key={item.id} herois={item} escolherHeroi={() => escolherHeroi(item)} />
                    })
                }

            </Container>
        )

    } else if (personagem1 && personagem2) {
        const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
        const skillPersonagem1 = sumValues(personagem1.powerstats)
        const skillPersonagem2 = sumValues(personagem2.powerstats)

        if (skillPersonagem1 > skillPersonagem2 && comparacao === false) {
            setVencedor(personagem1)
            setComparacao(true)
        } else if (skillPersonagem1 < skillPersonagem2 && comparacao === false) {
            setVencedor(personagem2)
            setComparacao(true)
        } else if (skillPersonagem1 === skillPersonagem2 && comparacao === false) {
            setVencedor("empate")
            setComparacao(true)
        }

        if (vencedor && vencedor !== "empate") {
            return (
                <Container>
                    {herois
                        .filter(item => {
                            return item.name.toLowerCase().includes(props.filtro.toLowerCase())
                        })
                        .map(item => {
                            return <Card key={item.id} herois={item} teste={() => escolherHeroi(item)} />
                        })
                    }
                    <Dialog open={modal} onBackdropClick={encerrarBatalha} transitionDuration={1000} maxWidth="lg" fullWidth={modal}>
                        <Box
                            sx={{
                                boxShadow: 2,
                                bgcolor: '#273d12',
                                m: 0,
                                p: 1,
                            }}
                        >
                            <ModalContainer>
                                <Vencedor>Vencedor(a): <span>{vencedor.name}</span></Vencedor>
                                <hr />
                                <div className="duelo">
                                    <div>
                                        <img src={personagem1.images.sm} alt={personagem1.name} />
                                        <h2>{personagem1.name} ({skillPersonagem1})</h2>
                                    </div>
                                    <div>
                                        <div className="stats">
                                            <div className="compare">
                                                {personagem1.powerstats.combat}
                                                {vitoriaOuDerrota(personagem1.powerstats.combat, personagem2.powerstats.combat)}
                                            </div>
                                            <h3>Combate</h3>
                                            <div className="compare">
                                                {vitoriaOuDerrota(personagem2.powerstats.combat, personagem1.powerstats.combat)}
                                                {personagem2.powerstats.combat}
                                            </div>
                                        </div>
                                        <div className="stats">
                                            <div className="compare">
                                                {personagem1.powerstats.durability}
                                                {vitoriaOuDerrota(personagem1.powerstats.durability, personagem2.powerstats.durability)}
                                            </div>
                                            <h3>Durabilidade</h3>
                                            <div className="compare">
                                                {vitoriaOuDerrota(personagem2.powerstats.durability, personagem1.powerstats.durability)}
                                                {personagem2.powerstats.durability}
                                            </div>
                                        </div>
                                        <div className="stats">
                                            <div className="compare">
                                                {personagem1.powerstats.intelligence}
                                                {vitoriaOuDerrota(personagem1.powerstats.intelligence, personagem2.powerstats.intelligence)}
                                            </div>
                                            <h3>Inteligência</h3>
                                            <div className="compare">
                                                {vitoriaOuDerrota(personagem2.powerstats.intelligence, personagem1.powerstats.intelligence)}
                                                {personagem2.powerstats.intelligence}
                                            </div>
                                        </div>
                                        <div className="stats">
                                            <div className="compare">
                                                {personagem1.powerstats.power}
                                                {vitoriaOuDerrota(personagem1.powerstats.power, personagem2.powerstats.power)}
                                            </div>
                                            <h3>Poder</h3>
                                            <div className="compare">
                                                {vitoriaOuDerrota(personagem2.powerstats.power, personagem1.powerstats.power)}
                                                {personagem2.powerstats.power}
                                            </div>
                                        </div>
                                        <div className="stats">
                                            <div className="compare">
                                                {personagem1.powerstats.speed}
                                                {vitoriaOuDerrota(personagem1.powerstats.speed, personagem2.powerstats.speed)}
                                            </div>
                                            <h3>Velocidade</h3>
                                            <div className="compare">
                                                {vitoriaOuDerrota(personagem2.powerstats.speed, personagem1.powerstats.speed)}
                                                {personagem2.powerstats.speed}
                                            </div>
                                        </div>
                                        <div className="stats">
                                            <div className="compare">
                                                {personagem1.powerstats.strength}
                                                {vitoriaOuDerrota(personagem1.powerstats.strength, personagem2.powerstats.strength)}
                                            </div>
                                            <h3>Força</h3>
                                            <div className="compare">
                                                {vitoriaOuDerrota(personagem2.powerstats.strength, personagem1.powerstats.strength)}
                                                {personagem2.powerstats.strength}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={personagem2.images.sm} alt={personagem2.name} />
                                            <h2>{personagem2.name} ({skillPersonagem2})</h2>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        </Box>
                    </Dialog>
                </Container>
            )
        } else if (vencedor && vencedor === "empate") {
            return (
                <Container>
                    {herois
                        .filter(item => {
                            return item.name.toLowerCase().includes(props.filtro.toLowerCase())
                        })
                        .map(item => {
                            return <Card key={item.id} herois={item} teste={() => escolherHeroi(item)} />
                        })
                    }
                    <Dialog open={modal} onBackdropClick={encerrarBatalha} transitionDuration={1000} maxWidth="lg" fullWidth={modal}>
                        <Box
                            sx={{
                                boxShadow: 2,
                                bgcolor: '#273d12',
                                m: 0,
                                p: 1,
                            }}
                        >
                            <ModalContainer>
                                <Vencedor>Essa batalha não tem vencedor!</Vencedor>
                                <hr />
                                <div className="duelo">
                                    <div>
                                        <img src={personagem1.images.sm} alt={personagem1.name} />
                                        <h2>{personagem1.name} ({skillPersonagem1})</h2>
                                    </div>
                                    <div>
                                        <div className="stats">
                                            {personagem1.powerstats.combat}
                                            {vitoriaOuDerrota(personagem1.powerstats.combat, personagem2.powerstats.combat)}
                                            <h3>Combate</h3>
                                            {vitoriaOuDerrota(personagem2.powerstats.combat, personagem1.powerstats.combat)}
                                            {personagem2.powerstats.combat}
                                        </div>
                                        <div className="stats">
                                            {personagem1.powerstats.durability}
                                            {vitoriaOuDerrota(personagem1.powerstats.durability, personagem2.powerstats.durability)}
                                            <h3>Durabilidade</h3>
                                            {vitoriaOuDerrota(personagem2.powerstats.durability, personagem1.powerstats.durability)}
                                            {personagem2.powerstats.durability}
                                        </div>
                                        <div className="stats">
                                            {personagem1.powerstats.intelligence}
                                            {vitoriaOuDerrota(personagem1.powerstats.intelligence, personagem2.powerstats.intelligence)}
                                            <h3>Inteligência</h3>
                                            {vitoriaOuDerrota(personagem2.powerstats.intelligence, personagem1.powerstats.intelligence)}
                                            {personagem2.powerstats.intelligence}
                                        </div>
                                        <div className="stats">
                                            {personagem1.powerstats.power}
                                            {vitoriaOuDerrota(personagem1.powerstats.power, personagem2.powerstats.power)}
                                            <h3>Poder</h3>
                                            {vitoriaOuDerrota(personagem2.powerstats.power, personagem1.powerstats.power)}
                                            {personagem2.powerstats.power}
                                        </div>
                                        <div className="stats">
                                            {personagem1.powerstats.speed}
                                            {vitoriaOuDerrota(personagem1.powerstats.speed, personagem2.powerstats.speed)}
                                            <h3>Velocidade</h3>
                                            {vitoriaOuDerrota(personagem2.powerstats.speed, personagem1.powerstats.speed)}
                                            {personagem2.powerstats.speed}
                                        </div>
                                        <div className="stats">
                                            {personagem1.powerstats.strength}
                                            {vitoriaOuDerrota(personagem1.powerstats.strength, personagem2.powerstats.strength)}
                                            <h3>Força</h3>
                                            {vitoriaOuDerrota(personagem2.powerstats.strength, personagem1.powerstats.strength)}
                                            {personagem2.powerstats.strength}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <img src={personagem2.images.sm} alt={personagem2.name} />
                                            <h2>{personagem2.name} ({skillPersonagem2})</h2>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        </Box>
                    </Dialog>
                </Container>
            )
        }
        else {
            return <></>
        }
    }
}

export default CardContainer