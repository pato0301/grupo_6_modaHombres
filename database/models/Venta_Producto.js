module.exports = (sequelize, DataTypes) => {

    const alias = "VentaProductos"

    const cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idventas: {
            type : DataTypes.STRING(11),
            allowNull : false,
        },
        idproductos: {
            type : DataTypes.STRING(11),
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