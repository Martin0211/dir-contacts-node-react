const { User } = require('../models/index');

const getAllUser = (req, res) => {
    return User.findAll()
      .then((user) => {
        return res.json(user)
      })
  };

const postNewUser = async (req, res) => {
    try {
      const { username } = req.body;
  
      // Verifica si el usuario ya existe
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe.' });
      }
  
      const newUser = await User.create({
        username, // Asegúrate de cifrar la contraseña antes de guardarla en la base de datos
      });
  
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error para crear usuario en el servidor.' });
    }
  };

  const putUpdateUser = async (req, res) => {
    try {
      const { id } = req.params; // El id del usuario que deseas actualizar
      const { username } = req.body;
  
      // Verifica si el usuario existe
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
  
      // Actualiza el usuario
      await user.update({
        username,
      });
  
      return res.status(200).json({ users: user, message: 'Edición exitosa.'});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al actualizar usuario en el servidor.' });
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params; // El id del usuario que deseas eliminar
  
      // Verifica si el usuario existe
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
  
      // Elimina el usuario
      await user.destroy();
  
      return res.status(204).json({ message: 'Usuario eliminado exitosamente.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al eliminar usuario en el servidor.' });
    }
  };
  
  module.exports = {
    getAllUser,
    postNewUser,
    putUpdateUser,
    deleteUser
  };