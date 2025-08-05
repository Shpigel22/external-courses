const user = {};

user.age = 30;
user.name = 'Ilya';
user.isAdmin = true;

delete user.isAdmin;

module.exports = user;
