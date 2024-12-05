const userService = require('../services/usuarioService');

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
};

exports.createUser = async (req, res) => {
  const { firstname, surname, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const user = await userService.createUser({ firstname, surname, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const user = await userService.updateUser(id, userData);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
