import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
    display:flex;
    flex-grow: row;
    flex-wrap: wrap;
    width: 100%;
`

const CardContainer = (props) => {
    const herois = props.herois
    return (
        <Container>
            <Card herois={herois} />
        </Container>
    )
}

export default CardContainer