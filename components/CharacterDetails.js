import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';

const CharacterName = styled.Text`
  color: #000;
`;

const CharacterDetails = (props) => {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/265`)
      .then((res) => {
        setChar(res.data);
        console.log('Response:', res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [props.id]);

  return (
    <SoloCharWrapper>
      <CharCard>
        <h3>{char.name}</h3>
        <img src={char.image} alt='profile pic' />
        <p>Status: {char.status}</p>
        <p>Species: {char.species}</p>
        <p>Gender: {char.gender}</p>
        <p>Origin: {char.origin && char.origin.name}</p>
      </CharCard>
    </SoloCharWrapper>
  );
};

const SoloCharWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
`;

const CharCard = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a1d12b;
  background: #303054;
  width: 50vw;
  border-radius: 15px;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem darkblue);
  h3 {
    font-size: 2rem;
  }
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
  p {
    color: #fff;
    font-size: 1.4rem;
  }
`;

export default CharacterDetails;
