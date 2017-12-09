/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('pikosszes_betegenkent', {
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
    pik_1a_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1a_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1j_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_1v_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2a_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2j_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_2v_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3a_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3j_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_3v_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4a_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4j_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_4v_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5a_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5j_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_5v_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6a_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6j_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_pozitiv_gondolkodas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_kontrollerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_koherenciaerzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_ontisztelet: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_novekedeserzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_rugalmassag_kihivaskereses: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_empatia_tarsas_monitorozas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_lelemenyesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_enhatekonysag_erzes: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_tarsas_mobilizalas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_szocialis_alkotokepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_szinkronkepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_kitartaskepesseg: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_impulzivitaskontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_erzelmi_kontroll: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_ingerlekenyseg_gatlas: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_megkozelito_monitorozo: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_mobilizalo_alkoto_vegrehajto: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    pik_6v_onszabalyozo_rendszer: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
      tableName: 'pikosszes_betegenkent'
    });
};
