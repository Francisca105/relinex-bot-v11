const { db_name, db_user, db_pass} = require("../config.json")
const { Sequelize } = require("sequelize")

module.exports = new Sequelize(db_name, db_user, db_pass, {
    host: '54.39.141.61',
    dialect: 'mysql'
})

