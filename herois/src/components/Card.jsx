import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
    background-color: black;
    height: 30vh;
    width: 25vw;
    min-width: 460px;
    min-height: 200px;
    box-shadow: 3px 3px 6px#273d12;
    display: flex;
    margin: 8px;
   
    img{
        width: 50%;
        height: 100%
    }
`
const Name = styled.h2`
    
    margin:0;
`
const Info = styled.div`
    display: flex;
    width:  50%;
    align-items: center;
    padding-left: 8px;

    .nascimento{
        align-self: end;
        padding:0;
        margin:0;
    }

    p{
        color: #C0C0C0;
    }
`

const Card = (props) => {
    const heroi = props.herois

    let localDeNascimento = ""

    if (heroi.biography.placeOfBirth === "-") {
        localDeNascimento = "Unknown"
    } else {
        localDeNascimento = heroi.biography.placeOfBirth
    }

    return (
        <CardBox onClick={props.escolherHeroi}>
            <img src={heroi.images.md} alt={heroi.name} />
            <Info>
                <div className="nome">
                    <Name>{heroi.name}</Name>
                    <p>{heroi.biography.publisher}</p>
                </div>
                <div className="nascimento">
                    <h5>{localDeNascimento}</h5>
                </div>
            </Info>
        </CardBox>
    )
}

export default Card