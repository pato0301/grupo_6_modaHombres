module.exports = (sequelize, DataTypes) => {
 const alias = "usuario"

 const cols = {
        idusuario : {
            type : DataType.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        nombre : { 
         type: DataType.STRING(45),
         allowNull : true, 
        },
        apellido: {
            type : DataType.STRING(45),
            allowNull : true,
        },
        username: {
            type : DataType.STRING(45),
            allowNull : false,
        },
        email: {
            type : DataType.STRING(45),
            allowNull : false,
        },
        password: {
            type : DataType.STRING(80),
            allowNull : false,
        },
        altura: {
            type : DataType.DECIMAL(2,0),
            allowNull : true,
        },
        peso: {
            type : DataType.INTEGER(11),
            allowNull : true,
        },
        telefono: {
            type : DataType.INTEGER(11),
            allowNull : true,
        },
        fecha_nacimiento: {
            type: Sequelize.DATE,  
            defaultValue: Sequelize.NOW
        },
        tarjeta_id: {
            type : DataType.INTEGER(11),
            allowNull : true,
        },
        created_at: sequelize.DATE,
        updatedAt: Sequelize.DATE,

 }
 const config = {
    tableName : "usuarios",
    timestamp : true,
    underscored : true,
}
const usuarios = sequelize.define(alias,cols,config)

return usuarios
}

