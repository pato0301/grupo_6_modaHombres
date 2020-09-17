module.exports = (sequelize, DataTypes) => {

    const alias = "Venta"

    const cols = {
        idventas : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        nro_factura: {
            type : DataTypes.STRING(200),
            allowNull : false,
        },
        nro_orden: {
            type : DataTypes.STRING(200),
            allowNull : false,
        },
        precio_total: {
            type : DataTypes.FLOAT,
            allowNull : false,
        },
        idusuario: {
            type : DataTypes.INTEGER,
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