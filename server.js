const express = require("express");
const bodyParser = require("body-parser");
const tarefaRoutes = require("./src/routes/tasksRoutes");
const sequelize = require("./config/database");

const app = express();
const port = 7001;

app.use(bodyParser.json());
app.use("/api/tarefas", tarefaRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
  });
}).catch(error => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});
