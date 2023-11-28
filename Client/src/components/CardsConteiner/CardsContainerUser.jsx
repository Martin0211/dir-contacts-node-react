import React, { useEffect, useState } from 'react';
import UserCard from '../Card/UserCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getUserAll, postCreateUser } from '../../redux/actions.js';
import CreateUserForm from '../Form/CreateUserForm.jsx';


const CardsWrapper = styled.div`
    width: 90vw;
    padding-top: 10vh;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

const Div = styled.div`
background-color: #f3f3f3;
 display: flex;
 flex-direction: column;
 align-items: center;
`
const Button = styled.div`
margin: 2vw;
padding: 2vw;
border: 1px solid #727171;
border-radius: 10px;
&:hover {
    background-color: #383838; 
  }
`


// Definimos nuestro componente funcional CardsContainer
const CardsContainerUsers = ({ user }) => {

    const dispatch = useDispatch();
    const usersLoaded = useSelector(state => state.usersLoaded);
    const users = useSelector(state => state.users)

    useEffect(() => {
        if (!usersLoaded) {
            dispatch(getUserAll());
        }
    }, [dispatch, usersLoaded]);

    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleCreateUser = (formData) => {
        dispatch(postCreateUser(formData));
        setShowCreateForm(false);
    };

    return (
        <Div>
            <Div>
            <CardsWrapper>
                {users.map(({ id, username }) => (
                    <UserCard key={id}
                        id={id}
                        username={username}
                    />))}
            </CardsWrapper>
            </Div>
            {showCreateForm && (
                <CreateUserForm onCreate={handleCreateUser} onCancel={() => setShowCreateForm(false)} />
            )}
            <Button onClick={() => setShowCreateForm(true)}>Crear nuevo usuario</Button>
        </Div>
    );
}

export default CardsContainerUsers;