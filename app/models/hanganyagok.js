/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('hanganyagok', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    hanganyag_fajta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'hanganyag_fajtak',
        key: 'id'
      }
    },
    felvetel_datum: {
      type: DataTypes.DATE,
      allowNull: true
    },
    megjegyzes: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
      tableName: 'hanganyagok'
    });
};
