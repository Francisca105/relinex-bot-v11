const { DataTypes, Model } = require('sequelize');

module.exports = class Ticket extends Model {
    static init(sequelize) {
        return super.init({
            authorId: { type: DataTypes.STRING, primaryKey: true }
        }, {
            tableName: 'Tickets',
            timestamps: true,
            sequelize
        });
    }
}