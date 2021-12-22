import React from "react";
import styled from "styled-components";
import { Dialog } from "@mui/material";
import { Box } from "@mui/material";

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

const Empate = styled.h1` 
color: blue;

    span{
        color: white;
    }
`

const ModalEmpate = (props) => {
    return (
        <Dialog open={props.modal} onBackdropClick={props.encerrarBatalha} transitionDuration={1000} maxWidth="lg" fullWidth={props.modal}>
            <Box
                sx={{
                    boxShadow: 2,
                    bgcolor: '#273d12',
                    m: 0,
                    p: 1,
                }}
            >
                <ModalContainer>
                    <Empate>Essa batalha não tem vencedor!</Empate>
                    <hr />
                    <div className="duelo">
                        <div>
                            <img src={props.personagem1.images.sm} alt={props.personagem1.name} />
                            <h2>{props.personagem1.name} ({props.skillPersonagem1})</h2>
                        </div>
                        <div>
                            <div className="stats">
                                <div className="compare">
                                    {props.personagem1.powerstats.combat}
                                    {props.vitoriaOuDerrota(props.personagem1.powerstats.combat, props.personagem2.powerstats.combat)}
                                </div>
                                <h3>Combate</h3>
                                <div className="compare">
                                    {props.vitoriaOuDerrota(props.personagem2.powerstats.combat, props.personagem1.powerstats.combat)}
                                    {props.personagem2.powerstats.combat}
                                </div>
                            </div>
                            <div className="stats">
                                <div className="compare">
                                    {props.personagem1.powerstats.durability}
                                    {props.vitoriaOuDerrota(props.personagem1.powerstats.durability, props.personagem2.powerstats.durability)}
                                </div>
                                <h3>Durabilidade</h3>
                                <div className="compare">
                                    {props.vitoriaOuDerrota(props.personagem2.powerstats.durability, props.personagem1.powerstats.durability)}
                                    {props.personagem2.powerstats.durability}
                                </div>
                            </div>
                            <div className="stats">
                                <div className="compare">
                                    {props.personagem1.powerstats.intelligence}
                                    {props.vitoriaOuDerrota(props.personagem1.powerstats.intelligence, props.personagem2.powerstats.intelligence)}
                                </div>
                                <h3>Inteligência</h3>
                                <div className="compare">
                                    {props.vitoriaOuDerrota(props.personagem2.powerstats.intelligence, props.personagem1.powerstats.intelligence)}
                                    {props.personagem2.powerstats.intelligence}
                                </div>
                            </div>
                            <div className="stats">
                                <div className="compare">
                                    {props.personagem1.powerstats.power}
                                    {props.vitoriaOuDerrota(props.personagem1.powerstats.power, props.personagem2.powerstats.power)}
                                </div>
                                <h3>Poder</h3>
                                <div className="compare">
                                    {props.vitoriaOuDerrota(props.personagem2.powerstats.power, props.personagem1.powerstats.power)}
                                    {props.personagem2.powerstats.power}
                                </div>
                            </div>
                            <div className="stats">
                                <div className="compare">
                                    {props.personagem1.powerstats.speed}
                                    {props.vitoriaOuDerrota(props.personagem1.powerstats.speed, props.personagem2.powerstats.speed)}
                                </div>
                                <h3>Velocidade</h3>
                                <div className="compare">
                                    {props.vitoriaOuDerrota(props.personagem2.powerstats.speed, props.personagem1.powerstats.speed)}
                                    {props.personagem2.powerstats.speed}
                                </div>
                            </div>
                            <div className="stats">
                                <div className="compare">
                                    {props.personagem1.powerstats.strength}
                                    {props.vitoriaOuDerrota(props.personagem1.powerstats.strength, props.personagem2.powerstats.strength)}
                                </div>
                                <h3>Força</h3>
                                <div className="compare">
                                    {props.vitoriaOuDerrota(props.personagem2.powerstats.strength, props.personagem1.powerstats.strength)}
                                    {props.personagem2.powerstats.strength}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={props.personagem2.images.sm} alt={props.personagem2.name} />
                                <h2>{props.personagem2.name} ({props.skillPersonagem2})</h2>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            </Box>
        </Dialog>
    )
}

export default ModalEmpate