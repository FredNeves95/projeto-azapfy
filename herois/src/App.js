import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from './services/api';

import CardContainer from './components/CardContainer';
import Menu from './components/Menu';

const Background = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100vw;
    background-color: black;
    color: white;
`

function App() {

  const [herois, setHerois] = useState();

  useEffect(() => {
    api
      .get("/api/ps/metahumans")
      .then((response) => setHerois(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (herois && herois.length > 0) {
    return (
      <Background>
        <Menu/>
        <CardContainer herois={herois} />
      </Background>
    );
  }
  return (
    <></>
  )
}

export default App;
