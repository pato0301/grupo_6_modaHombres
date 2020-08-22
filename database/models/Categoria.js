module.exports = (sequelize, DataTypes) => {

    const alias = "Categoria"

    const cols = {
        idcategorias : {
            type : DataType.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        nombre_categoria: {
            type : DataType.STRING(45),
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