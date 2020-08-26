module.exports = (sequelize, DataTypes) => {
    const alias = "Usuario"

    const cols = {
        idusuarios : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        nombre : { 
            type: DataTypes.STRING(45),
            allowNull : true, 
        },
        apellido: {
            type : DataTypes.STRING(45),
            allowNull : true,
        },
        username: {
            type : DataTypes.STRING(45),
            allowNull : false,
        },
        email: {
            type : DataTypes.STRING(45),
            allowNull : false,
        },
        password: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        altura: {
            type : DataTypes.DECIMAL(2,0),
            allowNull : true,
        },
        peso: {
            type : DataTypes.INTEGER(11),
            allowNull : true,
        },
        telefono: {
            type : DataTypes.INTEGER(11),
            allowNull : true,
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,  
            defaultValue: DataTypes.NOW
        },
        tarjeta_id: {
            type : DataTypes.INTEGER(11),
            allowNull : true,
        },
        avatar: {
            type : DataTypes.STRING(200),
            allowNull : true,
        }
    }

<<<<<<< HEAD
 }
 const config = {
    tableName : "usuarios",
    timestamp : true,
    underscored : true,
}
const Usuario = sequelize.define(alias,cols,config);

Usuario.associate = function(models) {
    Usuario.hasOne(models.direccion , {
        as: 'direccion',
        foreignKey: 'direcciones',
    })
}

return Usuario;
=======
    const config = {
        tableName : "usuarios",
        timestamp : true,
        underscored : true,
    }
    const Usuario = sequelize.define(alias,cols,config)

    return Usuario
>>>>>>> 14458de5d04c672b35f188e8a53e403856417f27
}

