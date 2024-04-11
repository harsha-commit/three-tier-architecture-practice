const {
  getUsersFromDatabase,
  createUserInDatabase,
} = require("./dataAccessLayer");

async function getUsers() {
  const users = await getUsersFromDatabase();
  return users;
}

async function createUser(name, email) {
  const newUser = await createUserInDatabase(name, email);
  return newUser;
}

module.exports = { getUsers, createUser };
