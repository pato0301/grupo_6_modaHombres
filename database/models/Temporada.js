module.exports = (sequelize, DataTypes) => {

    const alias = "Temporada"

    const cols = {
        idtemporadas : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        temporada: {
            type : DataTypes.STRING(100),
            allowNull : false,
        }
        }

    const config = {
            tableName : "temporadas",
            timestamp : true,
            underscored : true,
        }

    const Temporada = sequelize.define(alias,cols,config)

    return Temporada
}