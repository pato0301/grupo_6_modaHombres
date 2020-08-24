module.exports = (sequelize, DataTypes) => {

    const alias = "Categoria"

    const cols = {
        idcategorias : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        nombre_categoria: {
            type : DataTypes.STRING(45),
            allowNull : true,
        }
        }

    const config = {
            tableName : "categorias",
            timestamp : true,
            underscored : true,
        }

    const categoria = sequelize.define(alias,cols,config)

    return categoria
}