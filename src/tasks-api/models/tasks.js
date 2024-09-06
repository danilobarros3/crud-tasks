const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/database");

const Tarefa = sequelize.define(
  "Tarefa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("a fazer", "finalizado"),
      defaultValue: "a fazer",
    },
  },
  {
    tableName: "tarefas",
    timestamps: false, 
  }
);

module.exports = Tarefa;
