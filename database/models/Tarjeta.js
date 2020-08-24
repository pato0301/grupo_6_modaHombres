module.exports = (sequelize, DataTypes) => {

    const alias = "Tarjeta"

    const cols = {
        idtarjetas : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idusuario: {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
        nombre_tarjeta: {
            type : DataTypes.STRING(45),
            allowNull : true,
        },
        nro_tarjeta: {
            type : DataTypes.BIGINT(16),
            allowNull : true,
        },
        cod_seguridad: {
            type : DataTypes.INTEGER(11),
            allowNull : true,
        },
        nombre_titular: {
            type : DataTypes.STRING(45),
            allowNull : true,
        }
        }

    const config = {
            tableName : "tarjetas",
            timestamp : true,
            underscored : true,
        }

    const tarjeta = sequelize.define(alias,cols,config)

    return tarjeta
}