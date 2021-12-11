const { DataTypes, Model } = require('sequelize');

module.exports = class Warns extends Model {
    static init(sequelize) {
        return super.init({
            user: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            warns: { type: DataTypes.STRING, default: '0' }
        }, {
            tableName: 'Warns',
            timestamps: true,
            sequelize
        });
    }
}