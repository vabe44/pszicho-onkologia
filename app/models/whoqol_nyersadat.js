/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('WhoqolNyersadat', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        datum: {
            type: DataTypes.DATE,
            allowNull: true
        },
        megjegyzes: {
            type: DataTypes.STRING(140),
            allowNull: true
        },
        f12: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f13: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f14: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f22: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f24: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f32: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f34: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f41: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f43: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f44: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f53: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f61: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f62: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f72: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f73: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f82: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f83: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f84: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f102: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f104: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f112: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f113: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f114: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f131: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f152: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f154: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f161: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f162: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f163: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f171: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f174: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f182: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f184: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f191: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f213: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f221: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f222: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f232: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f234: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f21: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f71: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f101: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f111: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f141: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f142: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f172: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f181: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f201: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f202: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f211: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f212: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f231: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        g2: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        g3: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        g4: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f23: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f33: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f52: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f54: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f63: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f64: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f74: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f103: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f133: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f153: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f143: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f144: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f134: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f164: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f173: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f183: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f193: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f194: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f203: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f204: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f214: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f223: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f224: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f233: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f132: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        g1: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f151: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f31: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f51: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f192: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f11: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f42: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f81: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f121: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f122: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f124: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f123: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f91: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f93: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f94: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f92: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f241: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f242: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f243: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        f244: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        nem: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        szuletesi_datum: {
            type: DataTypes.DATE,
            allowNull: true
        },
        diagnozis: {
            type: DataTypes.STRING(140),
            allowNull: true
        },
        sziv: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        vernyomas: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        reuma: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        daganat: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        legzoszervi: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        cukorbetegseg: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        halyog: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        feloldali_benulas: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        csonttores: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        kronikus_ideg_v_lelki_problema: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        kronikus_labbetegseg_fajdalom: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        aranyer: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        parkinson: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        egyeb: {
            type: DataTypes.STRING(140),
            allowNull: true
        },
        tobb_betegseg: {
            type: DataTypes.INTEGER(4),
            allowNull: true
        },
        fajd: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        energia: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        alvas: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        pozerz: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        gondolk: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        onertek: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        testkep: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        negerz: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        mobil: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        aktiv: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        gyogyszerfugg: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        munkakep: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        szoc_kapcs: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        szoc_tam: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        szex: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        biztons: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        otthonkorny: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        anyagi_ef: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        egeszsegi_ellat: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        inform: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        szabadido: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        fiz_korny: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        kozlek: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        spiritu_d: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        altalanos: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        a24_fajd: {
            field: '24_fajd',
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        a24_negerz: {
            field: '24_negerz',
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        a24_gyogyszer: {
            field: '24_gyogyszer',
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        fizikai_d: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        psziches_d: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        fuggetlen_d: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        szoc_d: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        },
        korny_d: {
            type: DataTypes.DECIMAL(7,5),
            allowNull: true
        }
    }, {
            tableName: 'whoqol_nyersadatok_new',
            underscored: true,
            classMethods: {
                associate: function (models) {
                    models.WhoqolNyersadat.belongsTo(models.Beteg);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolAlkalom);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolBetegE);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolCsaladiAllapot);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolVegzettseg);
                }
            }
        });
};