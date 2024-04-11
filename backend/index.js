const express = require("express");
const bodyParser = require("body-parser");
const { getUsers, createUser } = require("./businessLogicLayer");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await createUser(name, email);
  res.json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
