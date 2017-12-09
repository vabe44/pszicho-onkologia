/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('WhoqolCsaladiAllapot', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    leiras: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
      tableName: 'whoqol_csaladi_allapotok',
      underscored: true,
      timestamps: false,
    });
};
