module.exports = (sequelize, DataTypes) => {

    const alias = "Producto"

    const cols = {
        idproducto : {
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
        current_season: {
            type : DataTypes.INTEGER,
            allowNull : true,
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

    // Producto.associate = function(models) {
    //     Producto.belongsTo(models.TalleProducto, {
    //         as: 'talleProducto',
    //         foreignKey:"idproductos",
    //         targetKey: "idproducto",
    //     })
    // }

    // Producto.associate = function(models) {
    //     Producto.hasMany(models.TalleProducto, {
    //         as: 'talleProducto',
    //         // foreignKey:"idproductos",
    //         // targetKey: "idproducto",
    //         foreignKey: 'idproducto',
    //         sourceKey: 'idproductos'
    //     })
    // }
    Producto.associate = function(models) {
        Producto.belongsToMany(models.Talle, {
            as: "talles",
            through: "talle_productos", 
            foreignKey: "idproducto",
            otherKey: "idtalle",
        }),
        Producto.hasMany(models.Imagen, {
            as: "imagenes",
            foreignKey: "idproducto",
            otherKey: "idimagen",
        }),
        Producto.belongsTo(models.Categoria, {
            as: "categorias",
            foreignKey: "id_categoria",
        })
    }

    return Producto;
}