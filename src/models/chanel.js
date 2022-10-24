module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('chanel', {
        idChanel: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    });
}