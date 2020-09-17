module.exports = (sequelize, DataTypes) => {

    const alias = "Direccion"

    const cols = {
        iddirecciones : {
            type : DataTypes.INTEGER(11),
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        idusuario : { 
            type: DataTypes.INTEGER(11),
            allowNull : true, 
        },
        localidad: {
            type : DataTypes.STRING(45),
            allowNull : true,
        },
        calle: {
            type : DataTypes.STRING(45),
            allowNull : false,
        },
        altura: {
            type : DataTypes.INTEGER(11),
            allowNull : false,
        },
        codigo_postal: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        pais: {
            type : DataTypes.STRING(2,0),
            allowNull : true,
        }
    }
    const config = {
        tableName : "direcciones",
        timestamp : true,
        underscored : true,
    }
    const Direccion = sequelize.define(alias,cols,config);

    Direccion.associate = function(models) {
        Direccion.belongsTo(models.Usuario , {
            as: 'usuario',
            foreignKey: 'idusuario',
            })
    }

    return Direccion
}