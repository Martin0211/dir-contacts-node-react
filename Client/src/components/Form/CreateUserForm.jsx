import React, { useState } from 'react';

const CreateUserForm = ({ onCreate, onCancel }) => {
    const [formData, setFormData] = useState({
        username: '',
        // Otros campos del formulario si es necesario
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <button type="submit">Create User</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    );
};

export default CreateUserForm;