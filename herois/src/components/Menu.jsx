import React from "react";
import styled from "styled-components";

const ContainerMenu = styled.div`
    background-color: #273d12;
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
`
const Itens = styled.div`
    height: 50px;
    width: 480px;
    display: flex;
    padding: 4px;
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
        ::placeholder{
        color: #273d12;
        text-align: center;        
        }
    }
    button{
        height: 42px;
        background-color: black;
        color: #273d12;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 3px 3px 3px #131f09;
        cursor: pointer;
        :hover{
            background-color: #1b1b1b;
        }
        :active{
            background-color: #555454;
        }
    }
`
const Menu = () => {
    return (
        <ContainerMenu>
            <Itens>
                <div>
                    <input placeholder="Digite o nome do personagem" />
                </div>
                <div>
                    <button><strong>Pesquisar</strong></button>
                </div>
            </Itens>
        </ContainerMenu>
    )
}
export default Menu