module.exports = (sequelize, DataTypes) => {

    const alias = "Productos"

    const cols = {
        idproductos : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        nombre: {
            type : DataTypes.STRING(45),
            allowNull : false,
        },
        color: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        talle: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        precio: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        imagen: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        descripcion: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        id_categoria: {
            type : DataTypes.STRING(80),
            allowNull : false,
        }
        }

    const config = {
            tableName : "productos",
            timestamp : true,
            underscored : true,
        }

    const Producto = sequelize.define(alias,cols,config)

    return Producto;
}