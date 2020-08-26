module.exports = (sequelize, DataTypes) => {

    const alias = "Producto"

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
            type : DataTypes.STRING(45),
            allowNull : true,
        },
        talle: {
            type : DataTypes.TEXT,
            allowNull : true,
        },
        precio: {
            type : DataTypes.FLOAT() ,
            allowNull : false,
        },
        imagen: {
            type : DataTypes.TEXT,
            allowNull : false,
        },
        descripcion: {
            type : DataTypes.TEXT,
            allowNull : false,
        },
        id_categoria: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        active: {
            type : DataTypes.INTEGER,
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