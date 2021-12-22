import React from "react";
import styled from "styled-components";

const ContainerMenu = styled.div`
    height: 50px;
    background-color: #273d12;
    display: flex;
    padding: 4px;
    position: sticky;
    top:0;
    align-items: center;
    justify-content:space-around;
    input{
        height: 36px;
        width: 280px;
        background-color: black;
        color: #273d12;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 3px 3px 3px #131f09;
        font-size: 16px;
        ::placeholder{
        color: #273d12;
        text-align: center;        
        font-size: 16px;
        }
    }
`

const Menu = (props) => {

    const pesquisaItem = (e) => {
        props.setPesquisa(e.target.value)
    }
    return (
        <ContainerMenu>
            <input placeholder="Digite o nome do personagem" value={props.pesquisa} onChange={pesquisaItem} type="text"/>
        </ContainerMenu>
    )
}
export default Menu