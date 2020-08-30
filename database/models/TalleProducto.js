module.exports = (sequelize, DataTypes) => {

    const alias = "TalleProducto"

    const cols = {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idtalle: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        idproducto: {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        active: {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
    }

    const config = {
            tableName : "talle_productos",
            timestamp : true,
            underscored : true,
        }

    const TalleProducto = sequelize.define(alias,cols,config);
    
    TalleProducto.associate = function(models) {
        TalleProducto.belongsTo(models.Talle , {
            as: 'talles',
            foreignKey: 'idtalle',
            })
    }

    return TalleProducto;
}