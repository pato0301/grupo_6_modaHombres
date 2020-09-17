module.exports = (sequelize, DataTypes) => {

    const alias = "VentaProducto"

    const cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idventas: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        idproductos: {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
    }

    const config = {
            tableName : "venta_productos",
            timestamp : true,
            underscored : true,
        }

    const VentaProducto = sequelize.define(alias,cols,config)

    return VentaProducto;
}