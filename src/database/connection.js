const { Sequelize, QueryTypes } = require("sequelize");

//Models
const {
  userSchema,
  roleSchema,
  chanelSchema,
  contractorSchema,
  clientSchema,
} = require("../models");

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false,
  }
);

userSchema(connection, Sequelize.DataTypes);
roleSchema(connection, Sequelize.DataTypes);
chanelSchema(connection, Sequelize.DataTypes);
contractorSchema(connection, Sequelize.DataTypes);
clientSchema(connection, Sequelize.DataTypes);

const { user, role, chanel, contractor, client } = connection.models;

//TODO: User Relations
role.hasOne(user, { foreignKey: "idRole" });
chanel.hasOne(user, { foreignKey: "idChanel" });
contractor.hasOne(user, { foreignKey: "idContractor" });
//TODO: Client Relations
user.hasOne(client, { foreignKey: "idUser" });
chanel.hasOne(client, { foreignKey: "idChanel" });

module.exports = {
  ...connection.models,
  connection,
};
