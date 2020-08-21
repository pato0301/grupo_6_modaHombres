module.exports = (sequelize, DataTypes) => {

    const alias = "Admin"

    const cols = {
        idadmin : {
            type : DataType.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        username: {
            type : DataType.STRING(45),
            allowNull : false,
        },
        password: {
            type : DataType.STRING(80),
            allowNull : false,
        },
        email: {
            type : DataType.STRING(45),
            allowNull : false,
        }
        }

    const config = {
            tableName : "admins",
            timestamp : true,
            underscored : true,
        }

    const admin = sequelize.define(alias,cols,config)

    return admin
}