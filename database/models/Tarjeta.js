module.exports = (sequelize, DataTypes) => {

    const alias = "Tarjeta"

    const cols = {
        idtarjetas : {
            type : DataType.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idusuario: {
            type : DataType.INTEGER,
            allowNull : true,
        },
        nombre_tarjeta: {
            type : DataType.STRING(45),
            allowNull : true,
        },
        nro_tarjeta: {
            type : DataType.BIGINT(16),
            allowNull : true,
        },
        cod_seguridad: {
            type : DataType.INTEGER(11),
            allowNull : true,
        },
        nombre_titular: {
            type : DataType.STRING(45),
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