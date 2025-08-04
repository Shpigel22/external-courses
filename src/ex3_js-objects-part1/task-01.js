const user = {};

user.age = 30;
user.name = 'Ilya';
user.isAdmin = true;

console.log(user.name);
console.log(user.age);
console.log(`Админ: ${user.isAdmin}`);

delete user.isAdmin;

console.log(user.name);
console.log(user.age);
console.log(`Админ: ${user.isAdmin}`);

module.exports = user;
