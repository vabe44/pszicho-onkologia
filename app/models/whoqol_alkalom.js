/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('WhoqolAlkalom', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    kod: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    leiras: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
      tableName: 'whoqol_alkalmak',
      timestamps: false
    });
};
