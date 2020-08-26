module.exports = (sequelize, DataTypes) => {
    const alias = "direcciones"
   
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
               type : DataTypes.DECIMAL(2,0),
               allowNull : true,
           },
           
           created_at: DataTypes.DATE,
           updatedAt: DataTypes.DATE,
   
    }
    const config = {
       tableName : "direcciones",
       timestamp : true,
       underscored : true,
   }
   const usuarios = sequelize.define(alias,cols,config);

   Direccion.associate = function(models) {
    Direccion.belongsTo(models.Users , {
        as: 'usuario',
        foreignKey: 'usuarios',
    })
}
   
   return usuarios
   }