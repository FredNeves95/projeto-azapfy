import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`

const CardContainer = (props) => {
    const herois = props.herois
    // console.log(herois)
    if (herois.length > 0) {
        return (
            <Container>
                {
                    herois.map((item) => (
                        <Card key={item.id} herois={item} />
                    ))
                }
            </Container>
        )
    }
    return (
        <></>
    )
}

export default CardContainer