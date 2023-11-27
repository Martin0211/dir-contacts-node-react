const { Contact, User } = require('../models/index');

const getAllContact = async (req, res) => {
    try {
        // Obtén el ID del usuario de los parámetros de la URL
        const userId = req.params.userId;

        // Asegúrate de que el usuario exista
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Obtén todos los contactos asociados al usuario
        const contacts = await Contact.findAll({ where: { userId } });
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor verificando el usuario.' });
    }
};

const postNewContact = async (req, res) => {
    
    try {
        const { firstName, lastName, phoneNumber, email } = req.body;

        // Suponiendo que req.userId contiene el ID del usuario actual
        const userId = req.params.userId;

        // Asegúrate de que el usuario exista
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Crea el contacto asociado al usuario
        const newContact = await Contact.create({
            firstName,
            lastName,
            phoneNumber,
            email,
            userId: req.params.userId, // Asociar el contacto al usuario
        });

        return res.status(201).json(newContact);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor al crear contacto.' });
    }
};

const updateContact = async (req, res) => {
    try {
        const { userId, contactId } = req.params;
        console.log('userId:', userId);
        console.log('contactId:', contactId);
        const { firstName, lastName, phoneNumber, email } = req.body;

        // Verifica si el usuario existe
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Verifica si el contacto existe
        const contact = await Contact.findByPk(contactId);
        if (!contact) {
            return res.status(405).json({ message: 'Contacto no encontrado.' });
        }

        // Verifica que el contacto pertenezca al usuario
        if (contact.userId !== user.id) {
            return res.status(403).json({ message: 'No tienes permisos para editar este contacto.' });
        }

        // Actualiza el contacto
        await contact.update({
            firstName,
            lastName,
            phoneNumber,
            email,
        });

        return res.status(200).json(contact);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al actualizar contacto en el servidor.' });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { userId, contactId } = req.params;

        // Verifica si el usuario existe
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Verifica si el contacto existe
        const contact = await Contact.findByPk(contactId);
        if (!contact) {
            return res.status(404).json({ message: 'Contacto no encontrado.' });
        }

        // Verifica que el contacto pertenezca al usuario
        if (contact.userId !== user.id) {
            return res.status(403).json({ message: 'No tienes permisos para eliminar este contacto.' });
        }

        // Elimina el contacto
        await contact.destroy();

        // Obtén todos los contactos actualizados asociados al usuario
        const updatedContacts = await Contact.findAll({ where: { userId } });

        return res.status(204).json(updatedContacts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al eliminar contacto en el servidor.' });
    }
};

module.exports = {
    getAllContact,
    postNewContact,
    updateContact,
    deleteContact
};