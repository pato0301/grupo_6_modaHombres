module.exports = (sequelize, DataTypes) => {

    const alias = "Talle"

    const cols = {
        idtalle : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        talle: {
            type : DataTypes.STRING(50),
            allowNull : true,
        },
        prenda: {
            type : DataTypes.STRING(50),
            allowNull : true,
        }
        }

    const config = {
            tableName : "talles",
            timestamp : true,
            underscored : true,
        }

    const Talle = sequelize.define(alias,cols,config);

    // Talle.associate = function(models) {
    //     Talle.belongsTo(models.Talle_productos , {
    //         as: 'talle_productos',
    //         foreignKey:"id",
    //         })
    // }

    return Talle
}