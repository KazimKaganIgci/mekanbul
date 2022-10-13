var express = require("express");
var router = express.Router();
var ctrlMain = require("../controllers/main");
var ctrlDigerleri = require("../controllers/digerleri");

/* GET home page. */
router.get("/", ctrlMain.anaSayfa);
router.get("/mekan/yorum/yeni", ctrlMain.yorumEkle);
router.get("/hakkinda", ctrlDigerleri.hakkinda);
router.get("/mekan", ctrlMain.mekanBilgisi);
module.exports = router;
