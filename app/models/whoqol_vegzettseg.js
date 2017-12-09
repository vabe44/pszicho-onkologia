/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('WhoqolVegzettseg', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    leiras: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
      tableName: 'whoqol_vegzettsegek',
      underscored: true,
      timestamps: false,
    });
};
