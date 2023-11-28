import React, { useEffect, useState } from 'react';
import ContactCard from '../Card/ContactCard.jsx';
import EditContactForm from '../Form/EditContactForm.jsx';
import CreateContactForm from '../Form/CreateContactForm.jsx';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getContactByUserId, deleteContact, putUpdate, postCreateContact } from '../../redux/actions.js';
import { Link, useParams } from 'react-router-dom';


const CardsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 7vw;
`
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
const CardsContainerContact = ({ props }) => {

    // Obtenemos el dispatch de Redux para disparar acciones
    const dispatch = useDispatch();
    const { id: userId } = useParams();


    // Utilizamos useSelector para obtener datos del estado de Redux
    const contacts = useSelector(state => state.contacts)

    const [editingContact, setEditingContact] = useState({
        id: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    });

    const [showEditForm, setShowEditForm] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);

    useEffect(() => {
        dispatch(getContactByUserId(userId));
    }, [dispatch, userId, contacts]);


    const handleEditContact = (contact) => {
        // Lógica para iniciar la edición de un contacto
        console.log(`Editando contacto con ID: ${contact.id}`);
        // Llenar el estado local con la información del contacto
        setEditingContact({
            id: contact.id,
            firstName: contact.firstName,
            lastName: contact.lastName,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        });
        setShowEditForm(true);
    };

    const handleUpdateContact = (formData) => {
    
        dispatch(putUpdate(userId, editingContact.id, formData));

        setEditingContact({
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
        });
        setShowEditForm(false);
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(userId, contactId));
    };

    const handleCreateContact = (formData) => {
        dispatch(postCreateContact(userId, formData));
        setShowCreateForm(false);
    };


    return ( <Div>
        <CardsWrapper>
            {contacts.map(({ id, firstName, lastName, phoneNumber, email }) => (
                <div key={id}>
                    <ContactCard
                        id={id}
                        firstName={firstName}
                        lastName={lastName}
                        phoneNumber={phoneNumber}
                        email={email}
                        onEdit={() => handleEditContact({ id, firstName, lastName, phoneNumber, email })}
                        onDelete={() => handleDeleteContact(id)}
                    />
                    {showEditForm && editingContact.id === id && (
                        <EditContactForm
                            contact={editingContact}
                            onUpdate={handleUpdateContact}
                            onCancel={() => setShowEditForm(false)} // Agrega esta función para cancelar la edición
                        />
                    )}
                </div>
            ))}
        </CardsWrapper>
        {showCreateForm && (
                <CreateContactForm
                    onCreate={handleCreateContact}
                    onCancel={() => setShowCreateForm(false)}
                />
            )}
            <Button onClick={() => setShowCreateForm(true)}>Create Nuevo Contacto</Button>
            <Link to="../">Atras</Link>

    </Div>
    );
}

export default CardsContainerContact;