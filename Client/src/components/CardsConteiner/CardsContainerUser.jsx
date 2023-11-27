import React, { useEffect, useState } from 'react';
import UserCard from '../Card/UserCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getUserAll, postCreateUser  } from '../../redux/actions.js';
import CreateUserForm from '../Form/CreateUserForm.jsx';


const CardsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;


// Definimos nuestro componente funcional CardsContainer
const CardsContainerUsers = ({user}) => {

   const dispatch = useDispatch();
   const usersLoaded = useSelector(state => state.usersLoaded );
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

    return (<div>
        <CardsWrapper>
            {users.map(({ id, username}) => (
                <UserCard key={id}
                    id={id}
                    username={username}
                />))}
        </CardsWrapper>
        {showCreateForm && (
                <CreateUserForm onCreate={handleCreateUser} onCancel={() => setShowCreateForm(false)} />
            )}
            <button onClick={() => setShowCreateForm(true)}>Create New User</button>
    </div>
    );
}

export default CardsContainerUsers;