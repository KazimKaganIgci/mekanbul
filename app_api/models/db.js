var mongoose = require("mongoose");
require("./mekansema");
var dbURI =
  "mongodb+srv://kazimigci:kazim1234@mekanbul.yhusri3.mongodb.net/mekanbul?retryWrites=true&w=majority";
//var dbURI = "mongodb://localhost/mekanbul";

mongoose.connect(dbURI);
function kapat(msg, callback) {
  mongoose.connection.close(function () {
    console.log(msg);
    callback();
  });
}
process.on("SIGINT", function () {
  kapat("Uygulama kapatıldı!", function () {
    process.exit(0);
  });
});
mongoose.connection.on("connected", function () {
  console.log(dbURI + " adresindeki veritabanına bağlanıldı");
});
mongoose.connection.on("disconnected", function () {
  console.log(dbURI + " adresindeki veritabanı bağlantısı koptu");
});
mongoose.connection.on("error", function () {
  console.log("Bağlantı hatası");
});
