module.exports = (sequelize, DataTypes) => {

    const alias = "Ventas"

    const cols = {
        idventas : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        nro_factura: {
            type : DataTypes.STRING(11),
            allowNull : false,
        },
        nro_orden: {
            type : DataTypes.STRING(11),
            allowNull : false,
        },
        precio_total: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        idusuario: {
            type : DataTypes.STRING(80),
            allowNull : false,
        }
        
        }

    const config = {
            tableName : "ventas",
            timestamp : true,
            underscored : true,
        }

    const Venta = sequelize.define(alias,cols,config)

    return Venta;
}