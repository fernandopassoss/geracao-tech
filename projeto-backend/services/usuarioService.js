const Usuario = require('../models/usuarios');

exports.getUserById = async (id) => {
  return await Usuario.findByPk(id, {
    attributes: ['id', 'firstname', 'surname', 'email'],
  });
};

exports.createUser = async (userData) => {
  return await Usuario.create(userData);
};

exports.updateUser = async (id, usuarioData) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;
  await Usuario.update(usuarioData);
  return usuario;
};
