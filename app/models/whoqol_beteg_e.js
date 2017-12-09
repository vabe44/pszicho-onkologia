/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('WhoqolBetegE', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    leiras: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
      tableName: 'whoqol_beteg_e',
      underscored: true,
      timestamps: false,
    });
};
