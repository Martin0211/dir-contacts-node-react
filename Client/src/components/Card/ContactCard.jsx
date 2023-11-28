import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';

const PrincipalDiv = styled.button`
position: static;
  width: 20vw;
  height: 55vh;
  padding: 0;
  margin-bottom: 2vw;
  border-radius: 10px;
  border: 1px solid #a09f9f;
  background-color: white;

  &:hover {
    border-color: #383838; 
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button`
  background-color: transparent;
  width: 50%;
  border: none;
  border-top: 1px solid #a09f9f;
  border-radius:  0px 0px 0px 10px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`

const DeleteButton = styled.button`
  background-color: transparent;
  width: 50%;
  height: 20%;
  border: none;
  border-left: 1px solid #a09f9f;
  border-top: 1px solid #a09f9f;
  border-radius:  0px 0px 10px 0px;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`
const Div = styled.div`
width: 84%;
  height: 75%;
    display: flex;
    flex-direction: column;
    padding: 13% 8% 0 8%;
    align-items: center;
`

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
            <Div>
                <div>
                    <h2>{firstName} {lastName}</h2>
                </div>
                <div>
                    <h3>{phoneNumber}</h3>
                    <h3>{email}</h3>
                </div>
            </Div>
            <ButtonContainer>
                <EditButton onClick={handleEditClick}>Editar</EditButton>
                <DeleteButton onClick={handleDeleteClick}>Eliminar</DeleteButton>
            </ButtonContainer>

        </PrincipalDiv>
    )
}

export default Card;