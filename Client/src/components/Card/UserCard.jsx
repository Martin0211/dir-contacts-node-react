import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrincipalDiv = styled.button`
position: static;
  width: 40vw;
  height: 12vh;
  border-radius: 10px;
  border: 1px solid #a09f9f;
  background-color: white;

  &:hover {
    border-color: #383838; 
  }
`
const LinkCard = styled(Link)`
    text-decoration: none;
    color: black;
`

const Card = (props) => {
    return (
        <PrincipalDiv>
            <LinkCard to={`contacts/${props.id}`}>
                <h2>{props.username}</h2>
                <h3>cantidad de contactos</h3>
            </LinkCard>
        </PrincipalDiv>
    )
}

export default Card;