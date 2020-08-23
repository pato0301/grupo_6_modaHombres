module.exports = (sequelize, DataTypes) => {
    const alias = "direcciones"
   
    const cols = {
           iddirecciones : {
               type : DataType.INTEGER(11),
               primaryKey : true,
               autoIncrement : true,
               unique: true
           },
           idusuario : { 
            type: DataType.INTEGER(11),
            allowNull : true, 
           },
           localidad: {
               type : DataType.STRING(45),
               allowNull : true,
           },
           calle: {
               type : DataType.STRING(45),
               allowNull : false,
           },
           altura: {
               type : DataType.INTEGER(11),
               allowNull : false,
           },
           codigo_postal: {
               type : DataType.STRING(80),
               allowNull : false,
           },
           pais: {
               type : DataType.DECIMAL(2,0),
               allowNull : true,
           },
           
           created_at: sequelize.DATE,
           updatedAt: Sequelize.DATE,
   
    }
    const config = {
       tableName : "direcciones",
       timestamp : true,
       underscored : true,
   }
   const usuarios = sequelize.define(alias,cols,config)
   
   return usuarios
   }