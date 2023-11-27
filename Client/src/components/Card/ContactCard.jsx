import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';

const PrincipalDiv = styled.button`
position: static;
  width: 20vw;
  height: 40vh;
  border-radius: 10px;
  border: 1px solid #a09f9f;
  background-color: white;

  &:hover {
    border-color: #383838; 
  }
`
/* const LinkCard = styled(Link)`
    text-decoration: none;
    color: black;
` */

const Card = (props) => {
    const { lastName, firstName, phoneNumber, email, onEdit, onDelete } = props;

    const handleEditClick = () => {
        if (onEdit) {
            onEdit();
        }
    };

    const handleDeleteClick = () => {
        if (onDelete) {
            onDelete();
        }
    };
    return (
        <PrincipalDiv>

            <div>
                <h2>{firstName} {lastName}</h2>
            </div>
            <div>
                <h3>{phoneNumber}</h3>
                <h3>{email}</h3>
            </div>
            <div>
                <button onClick={handleEditClick}>Editar</button>
                <button onClick={handleDeleteClick}>Eliminar</button>
            </div>

        </PrincipalDiv>
    )
}

export default Card;