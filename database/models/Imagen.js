module.exports = (sequelize, DataTypes) => {

    const alias = "Imagen"

    const cols = {
        idimagen : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idproducto: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        imagen: {
            type : DataTypes.STRING(200),
            allowNull : false
        }
    }

    const config = {
            tableName : "imagenes",
            timestamp : true,
            underscored : true,
        }

    const Imagen = sequelize.define(alias,cols,config);
    
    // TalleProducto.associate = function(models) {
    //     TalleProducto.belongsTo(models.Talle , {
    //         as: 'talles',
    //         foreignKey: 'idtalle',
    //         })
    // }

    return Imagen;
}