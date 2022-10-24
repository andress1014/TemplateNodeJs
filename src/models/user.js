const bcrypt = require("bcrypt");

module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [7, 42],
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      idChanel: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      idRole: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      idContractor: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, "a");
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, "a");
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
      instanceMethods: {
        validPassword: (password) => {
          return bcrypt.compareSync(password, this.password);
        },
      },
    }
  );
};
