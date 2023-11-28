import { GET_USER_ALL, POST_CREATE_USER, DELETE_USER, PUT_UPDATE_USER, GET_CONTACT_BY_USER_ID, POST_CREATE_CONTACT, PUT_UPDATE_CONTACT, DELETE_CONTACT } from './actions';


const initialState = {
    users: [],
    contacts: [],
    usersLoaded: false,
    contactLoaded: false,
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ALL:
            return { ...state, users: action.payload, usersLoaded: true };

        case POST_CREATE_USER:
            return { ...state, users: [...state.users, action.payload] };

        case DELETE_USER:
            const updatedUsersDelete = state.users.filter(user => user.id !== action.payload);
            return { ...state, users: updatedUsersDelete };

        case PUT_UPDATE_USER:
            const updatedUsers = state.users.map(user =>
                user.id === action.payload.id ? { ...user, username: action.payload.username } : user
            );
            return { ...state, users: updatedUsers };

        case GET_CONTACT_BY_USER_ID:
            return { ...state, contacts: action.payload, contactLoaded: true };

        case POST_CREATE_CONTACT:
            return { ...state, contacts: [...state.contacts, action.payload] };

        case DELETE_CONTACT:
            const updatedContactsDelete = state.contacts.filter(contact => contact.id !== action.payload.contactId);
            return { ...state, contacts: updatedContactsDelete };

        case PUT_UPDATE_CONTACT:
            const contactIndex = state.contacts.findIndex(contact => contact.id === action.payload.id);
            const updatedContacts = [...state.contacts];
            updatedContacts[contactIndex] = action.payload;
            return { ...state, contacts: updatedContacts };

        default:
            return { ...state };
    }
};

export default rootReducer;