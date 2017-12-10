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
    }, {
            tableName: 'whoqol_nyersadatok',
            underscored: true,
            classMethods: {
                associate: function (models) {
                    models.WhoqolNyersadat.belongsTo(models.Beteg);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolAlkalom);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolBetegE);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolCsaladiAllapot);
                    models.WhoqolNyersadat.belongsTo(models.WhoqolVegzettseg);
                }
            },
            getterMethods: {
                fajd() {
                    if( (this.f12 * this.f13 * this.f14 * this.f11) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f12 + this.f13 + this.f14 + this.f11)/4)*4;
                    }
                },
                energia() {
                    if( (this.f22 * this.f24 * this.f21 * this.f23) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f22) + (6-this.f24) + this.f21 + this.f23)/4)*4;
                    }
                },
                alvas() {
                    if( (this.f32 * this.f34 * this.f33 * this.f31) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f32) + (6-this.f34) + this.f33 + this.f31)/4)*4;
                    }
                },
                pozerz() {
                    if( (this.f41 * this.f43 * this.f44 * this.f42) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f41 + this.f43 + this.f44 + this.f42)/4)*4;
                    }
                },
                gondolk() {
                    if( (this.f53 * this.f52 * this.f54 * this.f51) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f53 + this.f52 + this.f54 + this.f51)/4)*4;
                    }
                },
                onertek() {
                    if( (this.f61 * this.f62 * this.f63 * this.f64) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f61 + this.f62 + this.f63 + this.f64)/4)*4;
                    }
                },
                testkep() {
                    if( (this.f72 * this.f73 * this.f71 * this.f74) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f72) + (6-this.f73) + this.f71 + this.f74)/4)*4;
                    }
                },
                negerz() {
                    if( (this.f82 * this.f83 * this.f84 * this.f81) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f82 + this.f83 + this.f84 + this.f81)/4)*4;
                    }
                },
                mobil() {
                    if( (this.f91 * this.f93 * this.f94 * this.f92) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f93) + (6-this.f94) + this.f91 + this.f92)/4)*4;
                    }
                },
                aktiv() {
                    if( (this.f102 * this.f104 * this.f101 * this.f103) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f102) + (6-this.f104) + this.f101 + this.f103)/4)*4;
                    }
                },
                gyogyszerfugg() {
                    if( (this.f112 * this.f113 * this.f114 * this.f111) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f112 + this.f113 + this.f114 + this.f111)/4)*4;
                    }
                },
                munkakep() {
                    if( (this.f121 * this.f122 * this.f124 * this.f123) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f121 + this.f122 + this.f124 + this.f123)/4)*4;
                    }
                },
                szoc_kapcs() {
                    if( (this.f131 * this.f133 * this.f134 * this.f132) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f131) + this.f133 + this.f134 + this.f132)/4)*4;
                    }
                },
                szoc_tam() {
                    if( (this.f141 * this.f142 * this.f143 * this.f144) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f141 + this.f142 + this.f143 + this.f144)/4)*4;
                    }
                },
                szex() {
                    if( (this.f152 * this.f154 * this.f153 * this.f151) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f154) + this.f152 + this.f153 + this.f151)/4)*4;
                    }
                },
                biztons() {
                    if( (this.f161 * this.f162 * this.f163 * this.f164) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f163) + this.f161 + this.f162 + this.f164)/4)*4;
                    }
                },
                otthonkorny() {
                    if( (this.f171 * this.f174 * this.f172 * this.f173) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f171 + this.f174 + this.f172 + this.f173)/4)*4;
                    }
                },
                anyagi_ef() {
                    if( (this.f182 * this.f184 * this.f181 * this.f183) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f182) + (6-this.f184) + this.f181 + this.f183)/4)*4;
                    }
                },
                egeszsegi_ellat() {
                    if( (this.f191 * this.f193 * this.f194 * this.f192) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f191 + this.f193 + this.f194 + this.f192)/4)*4;
                    }
                },
                inform() {
                    if( (this.f201 * this.f202 * this.f203 * this.f204) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f201 + this.f202 + this.f203 + this.f204)/4)*4;
                    }
                },
                szabadido() {
                    if( (this.f213 * this.f211 * this.f212 * this.f214) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f213 + this.f211 + this.f212 + this.f214)/4)*4;
                    }
                },
                fiz_korny() {
                    if( (this.f221 * this.f222 * this.f223 * this.f224) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f222) + this.f221 + this.f223 + this.f224)/4)*4;
                    }
                },
                kozlek() {
                    if( (this.f232 * this.f234 * this.f231 * this.f233) == 0 ) {
                        return 0;
                    } else {
                        return (((6-this.f232) + (6-this.f234) + this.f231 + this.f233)/4)*4;
                    }
                },
                spiritu_d() {
                    if( (this.f241 * this.f242 * this.f243 * this.f244) == 0 ) {
                        return 0;
                    } else {
                        return ((this.f241 + this.f242 + this.f243 + this.f244)/4)*4;
                    }
                },
                altalanos() {
                    if( (this.g2 * this.g3 * this.g4 * this.g1) == 0 ) {
                        return 0;
                    } else {
                        return ((this.g2 + this.g3 + this.g4 + this.g1)/4)*4;
                    }
                },
                fajd24() {
                    if(this.get('fajd') == 0) {
                        return 0;
                    } else {
                        return 24 - this.get('fajd');
                    }
                },
                negerz24() {
                    if(this.get('negerz') == 0) {
                        return 0;
                    } else {
                        return 24 - this.get('negerz');
                    }
                },
                gyogyszer24() {
                    if(this.get('gyogyszerfugg') == 0) {
                        return 0;
                    } else {
                        return 24 - this.get('gyogyszerfugg');
                    }
                },
                fizikai_d() {
                    if( (this.get('energia') * this.get('alvas') * this.get('fajd24')) == 0 ) {
                        return 0;
                    } else {
                        return (this.get('energia') + this.get('alvas') + this.get('fajd24'))/3;
                    }
                },
                psziches_d() {
                    if( (this.get('pozerz') * this.get('gondolk') * this.get('onertek') * this.get('testkep') * this.get('negerz24')) == 0 ) {
                        return 0;
                    } else {
                        return (this.get('pozerz') + this.get('gondolk') + this.get('onertek') + this.get('testkep') + this.get('negerz24'))/5;
                    }
                },
                fuggetlen_d() {
                    if( (this.get('mobil') * this.get('aktiv') * this.get('munkakep') + this.get('gyogyszer24')) == 0 ) {
                        return 0;
                    } else {
                        return (this.get('mobil') + this.get('aktiv') + this.get('munkakep') + this.get('gyogyszer24')) /4;
                    }
                },
                szoc_d() {
                    if( (this.get('szoc_kapcs') * this.get('szoc_tam') * this.get('szex')) == 0 ) {
                        return 0;
                    } else {
                        return (this.get('szoc_kapcs') + this.get('szoc_tam') + this.get('szex'))/3;
                    }
                },
                korny_d() {
                    if( (this.get('biztons') * this.get('otthonkorny') * this.get('anyagi_ef') * this.get('egeszsegi_ellat') * this.get('inform') * this.get('szabadido') * this.get('fiz_korny') * this.get('kozlek')) == 0 ) {
                        return 0;
                    } else {
                        return (this.get('biztons') + this.get('otthonkorny') + this.get('anyagi_ef') + this.get('egeszsegi_ellat') + this.get('inform') + this.get('szabadido') + this.get('fiz_korny') + this.get('kozlek'))/8;
                    }
                }
            },
        });
};