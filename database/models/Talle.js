module.exports = (sequelize, DataTypes) => {

    const alias = "Talle"

    const cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        talle: {
            type : DataTypes.STRING(50),
            allowNull : true,
        },
        prenda: {
            type : DataTypes.STRING(50),
            allowNull : true,
        }
        }

    const config = {
            tableName : "talles",
            timestamp : true,
            underscored : true,
        }

    const talle = sequelize.define(alias,cols,config)

    return talle
}