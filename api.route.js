//kode dari file api.route.js

//import route admin pada routes\admin.route.js
const adminRoute = require("./admin.route");

module.exports = function (app, urlApi) {
  //route admin
  app.use(urlApi, adminRoute);
};
