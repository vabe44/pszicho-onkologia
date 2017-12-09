/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('gepeles_fajtak', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hanganyag_fajta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'hanganyag_fajtak',
        key: 'id'
      }
    },
    tipus: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
      tableName: 'gepeles_fajtak'
    });
};
