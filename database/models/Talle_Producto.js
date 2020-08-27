module.exports = (sequelize, DataTypes) => {

    const alias = "talle_productos"

    const cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idtalle_producto: {
            type : DataTypes.STRING(11),
            allowNull : false,
        },
        idprducto: {
            type : DataTypes.STRING(11),
            allowNull : false,
        }
    }

    const config = {
            tableName : "talle_productos",
            timestamp : true,
            underscored : true,
        }

    const talleProducto = sequelize.define(alias,cols,config);
    
    talleProducto.associate = function(models) {
        talleProducto.belongsTo(models.Talle , {
            as: 'talles',
            foreignKey: 'talles',
            })
    }

    return talleProducto;
}