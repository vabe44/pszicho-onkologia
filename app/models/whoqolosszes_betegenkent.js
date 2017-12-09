/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('WhoqolosszesBetegenkent', {
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
    qol1_fajd: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_energia: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_alvas: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_pozerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_gondolk: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_onertek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_testkep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_negerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_mobil: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_aktiv: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_gyogyszerfugg: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_munkakep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_szoc_kapcs: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_szoc_tam: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_szex: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_biztons: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_otthonkorny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_anyagi_ef: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_egeszsegi_ellat: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_inform: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_szabadido: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_fiz_korny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_kozlek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_spiritu_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_altalanos: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_fizikai_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_psziches_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_fuggetlen_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_szoc_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol1_korny_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_fajd: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_energia: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_alvas: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_pozerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_gondolk: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_onertek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_testkep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_negerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_mobil: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_aktiv: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_gyogyszerfugg: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_munkakep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_szoc_kapcs: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_szoc_tam: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_szex: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_biztons: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_otthonkorny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_anyagi_ef: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_egeszsegi_ellat: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_inform: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_szabadido: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_fiz_korny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_kozlek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_spiritu_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_altalanos: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_fizikai_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_psziches_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_fuggetlen_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_szoc_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol2_korny_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_fajd: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_energia: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_alvas: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_pozerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_gondolk: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_onertek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_testkep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_negerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_mobil: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_aktiv: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_gyogyszerfugg: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_munkakep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_szoc_kapcs: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_szoc_tam: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_szex: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_biztons: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_otthonkorny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_anyagi_ef: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_egeszsegi_ellat: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_inform: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_szabadido: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_fiz_korny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_kozlek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_spiritu_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_altalanos: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_fizikai_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_psziches_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_fuggetlen_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_szoc_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol3_korny_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_fajd: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_energia: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_alvas: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_pozerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_gondolk: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_onertek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_testkep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_negerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_mobil: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_aktiv: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_gyogyszerfugg: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_munkakep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_szoc_kapcs: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_szoc_tam: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_szex: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_biztons: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_otthonkorny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_anyagi_ef: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_egeszsegi_ellat: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_inform: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_szabadido: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_fiz_korny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_kozlek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_spiritu_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_altalanos: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_fizikai_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_psziches_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_fuggetlen_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_szoc_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol4_korny_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_fajd: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_energia: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_alvas: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_pozerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_gondolk: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_onertek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_testkep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_negerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_mobil: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_aktiv: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_gyogyszerfugg: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_munkakep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_szoc_kapcs: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_szoc_tam: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_szex: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_biztons: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_otthonkorny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_anyagi_ef: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_egeszsegi_ellat: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_inform: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_szabadido: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_fiz_korny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_kozlek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_spiritu_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_altalanos: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_fizikai_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_psziches_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_fuggetlen_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_szoc_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol5_korny_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_fajd: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_energia: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_alvas: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_pozerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_gondolk: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_onertek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_testkep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_negerz: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_mobil: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_aktiv: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_gyogyszerfugg: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_munkakep: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_szoc_kapcs: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_szoc_tam: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_szex: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_biztons: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_otthonkorny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_anyagi_ef: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_egeszsegi_ellat: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_inform: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_szabadido: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_fiz_korny: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_kozlek: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_spiritu_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_altalanos: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_fizikai_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_psziches_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_fuggetlen_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_szoc_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    },
    qol6_korny_d: {
      type: DataTypes.DECIMAL(7,5),
      allowNull: true
    }
  }, {
      tableName: 'whoqolosszes_betegenkent'
    });
};
