/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Beteg', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        azonosito: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nev: {
            type: DataTypes.STRING,
            allowNull: true
        },
        megjegyzes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fazis: {
            type: DataTypes.STRING,
            allowNull: true
        },
        kutataszaro: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
            tableName: 'betegek_new',
            underscored: true,
            classMethods: {
                associate: function (models) {
                    models.Beteg.belongsTo(models.BetegCsoport);
                    models.Beteg.hasMany(models.WhoqolNyersadat);
                    models.Beteg.hasMany(models.PikNyersadat);
                }
            }
        });
};