/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('gepelesek', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hanganyag_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'hanganyagok',
        key: 'id'
      }
    },
    gepeles_fajta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'gepeles_fajtak',
        key: 'id'
      }
    },
    szoveg: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
      tableName: 'gepelesek'
    });
};
