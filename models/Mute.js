const { DataTypes, Model } = require('sequelize');

module.exports = class Mute extends Model {
    static init(sequelize) {
        return super.init({
            guild: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            mutado: { type: DataTypes.STRING },
            mute: { type: DataTypes.BOOLEAN, default: false }
        }, {
            tableName: 'Mute',
            timestamps: true,
            sequelize
        });
    }
}