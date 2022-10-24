module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('contractor', {
        idContractor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        businessName : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nit: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    });
};