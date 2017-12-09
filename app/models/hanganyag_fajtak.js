/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('hanganyag_fajtak', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    alkalom_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tipus: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
      tableName: 'hanganyag_fajtak'
    });
};
