module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define("client", {
    idClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numberContract: {
        type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    typeDocument: {
      type: DataTypes.STRING,
    },
    document: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    suscribe: {
      type: DataTypes.DATE,
    },
    unsuscribe: {
      type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    idChanel: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    nameProduct: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    }
  });
};
