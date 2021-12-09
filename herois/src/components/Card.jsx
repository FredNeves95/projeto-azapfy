import React, { useEffect } from "react";
import styled from "styled-components";

const CardBox = styled.div`
    background-color: black;
    height: fit-content;
    width: 30vw;
    box-shadow: 3px 3px 6px#363636;
    display: flex;
    margin: 2%;
    padding-right: 2%;
   
    img{
        width: 50%;
    }
`
const Name = styled.h2`
    color: #4F4F4F;
    margin:0;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    width:  50%;
    margin: 25% 0 0 6%;

    .nascimento{
        margin-top: 30%;
        align-self: end;
    }

    p{
        color: #C0C0C0;
    }
`

const Card = ( props ) => {
    const herois = props.herois
    console.log( herois )

    const heroi = herois.map( item => {
        let localDeNascimento = ""

        if ( item.biography.placeOfBirth === "-" ) {
            localDeNascimento = "Unknown"
        } else {
            localDeNascimento = item.biography.placeOfBirth
        }

        return (
            <CardBox>
                <img src={ item.images.md } />
                <Info>
                    <div className="nome">
                        <Name>{ item.name }</Name>
                        <p>{ item.biography.publisher }</p>
                    </div>
                    <div className="nascimento">
                        <h5>{ localDeNascimento }</h5>
                    </div>
                </Info>
            </CardBox>
        )
    })

    return (
        <div>
            { heroi }
        </div>
    )
}

export default Card