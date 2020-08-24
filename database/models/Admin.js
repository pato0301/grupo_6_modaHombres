module.exports = (sequelize, DataTypes) => {

    const alias = "Admin"

    const cols = {
        idadmin : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            unique: true
        },
        username: {
            type : DataTypes.STRING(45),
            allowNull : false,
        },
        password: {
            type : DataTypes.STRING(80),
            allowNull : false,
        },
        email: {
            type : DataTypes.STRING(45),
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