const User = require('../models/user.model');

exports.getAllUsers = (req, res) => {
  User.getAll((err, data) => {
    if (err) return res.status(500).send(err);
    res.send(data);
  });
};

exports.createUser = (req, res) => {
  User.create(req.body, (err, data) => {
    if (err) return res.status(500).send(err);
    res.send(data);
  });
};
