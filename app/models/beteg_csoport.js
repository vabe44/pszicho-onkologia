/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('BetegCsoport', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nev: {
            type: DataTypes.STRING,
            allowNull: true
        },
        leiras: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
            tableName: 'betegek_csoportok'
        });
};