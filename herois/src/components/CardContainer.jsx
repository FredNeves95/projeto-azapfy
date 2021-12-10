import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    min-height:100vh;
    justify-content: space-around;
`

const CardContainer = (props) => {
    console.log(props.filtro)
    const herois = props.herois
    // console.log(herois)
    if (herois.length > 0) {
        return (
            <Container>
                {herois
                    .filter(item => {
                        return item.name.toLowerCase().includes(props.filtro.toLowerCase())
                    })
                    .map(item=> {
                        return <Card key={item.id} herois={item} />
                    })
                }
            </Container>
        )
    }
    return (
        <></>
    )
}

export default CardContainer