import axios from 'axios'

export const GET_USER_ALL = "GET_USER_ALL"
export const POST_CREATE_USER = "POST_CREATE_USER"
export const DELETE_USER = "DELETE_USER"
export const PUT_UPDATE_USER = "PUT_UPDATE_USER"

export const GET_CONTACT_BY_USER_ID = "GET_CONTACT_BY_USER_ID"
export const POST_CREATE_CONTACT = "POST_CREATE_CONTACT"
export const PUT_UPDATE_CONTACT = "PUT_UPDATE_CONTACT"
export const DELETE_CONTACT = "DELETE_CONTACT"


const URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api";

export const getUserAll = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`${URL}/api/user/`);
            const user = apiData.data;
            dispatch({ type: GET_USER_ALL, payload: user });

        } catch (error) {
            window.alert(error)
        }

    }
};

export const postCreateUser = (formData) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.post(`${URL}/api/user/`, formData);
            const createUser = apiData.data;
            dispatch({ type: POST_CREATE_USER, payload: createUser });

        } catch (error) {
            window.alert(error)
        }


    }
};

export const deleteUser = (id) => {
    return async function (dispatch) {
        try {
            await axios.delete(`${URL}/api/user/${id}`);
            dispatch({ type: DELETE_USER, payload: id });
        } catch (error) {
            window.alert(error);
        }
    }
}

export const putUpdateUser = (id, username) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.put(`${URL}/api/user/${id}`, { username });
            const updatedUser = apiData.data; 
            dispatch({ type: PUT_UPDATE_USER, payload: updatedUser });
        } catch (error) {
            window.alert(error);
        }
    }
};

export const getContactByUserId = (id) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get(`${URL}/api/contac/contacts/${id}`);
            const contacts = apiData.data;
            dispatch({ type: GET_CONTACT_BY_USER_ID, payload: contacts });

        } catch (error) {
            window.alert(error)
        }

    }
};

export const postCreateContact = (id, formData) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.post(`${URL}/api/contac/${id}`, formData);
            const createContact = apiData.data;
            dispatch({ type: POST_CREATE_CONTACT, payload: createContact });

        } catch (error) {
            window.alert(error)
        }


    }
};

export const deleteContact = (userId,contactId) => {
    return async function (dispatch) {
        try {
            await axios.delete(`${URL}/contac/${userId}/api/contacts/${contactId}`);
            dispatch({ type: DELETE_CONTACT, payload: userId,contactId });
        } catch (error) {
            window.alert(error);
        }
    }
};

export const putUpdate = (userId,contactId, formData) => {
    return async function (dispatch) {
        try {
            const apiData = await axios.put(`${URL}/api/contac/${userId}/contacts/${contactId}`, formData);
            const updatedcontact = apiData.data;
            dispatch({ type: PUT_UPDATE_CONTACT, payload: updatedcontact});
        } catch (error) {
            window.alert(error);
        }
    }
};