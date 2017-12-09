/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PikNyersadat', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    datum: {
      type: DataTypes.DATE,
      allowNull: true
    },
    azonosito: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'pik_azonositok',
        key: 'kod'
      }
    },
    teszt: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'pik_tesztek',
        key: 'kod'
      }
    },
    megjegyzes: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    k_1: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_2: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_3: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_4: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_5: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_6: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_7: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_8: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_9: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_10: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_11: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_12: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_13: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_14: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_15: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_16: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_17: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_18: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_19: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_20: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_21: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_22: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_23: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_24: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_25: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_26: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_27: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_28: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_29: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_30: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_31: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_32: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_33: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_34: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_35: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_36: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_37: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_38: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_39: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_40: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_41: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_42: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_43: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_44: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_45: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_46: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_47: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_48: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_49: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_50: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_51: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_52: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_53: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_54: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_55: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_56: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_57: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_58: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_59: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_60: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_61: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_62: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_63: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_64: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_65: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_66: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_67: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_68: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_69: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_70: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_71: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_72: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_73: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_74: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_75: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_76: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_77: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_78: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_79: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    k_80: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    beteg_id: {
      type: DataTypes.INTEGER,
    }
  }, {
      tableName: 'pik_nyersadatok',
      underscored: true,
      timestamps: false,
    });
};
