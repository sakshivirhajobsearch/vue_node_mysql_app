const db = require('../config/db.config');

const User = {
  getAll: result => {
    db.query('SELECT * FROM users', (err, res) => {
      if (err) return result(err, null);
      result(null, res);
    });
  },
  create: (newUser, result) => {
    db.query('INSERT INTO users SET ?', newUser, (err, res) => {
      if (err) return result(err, null);
      result(null, { id: res.insertId, ...newUser });
    });
  }
};

module.exports = User;
