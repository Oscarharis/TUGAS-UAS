//kode dari file index.js

//import config
const baseConfig = require("./config/base.config");

//import express
const express = require("express");

const app = express();
const port = 3000;
const urlApi = "/api";

//import multer untuk mngehandle input dari form data
const multer = require("multer");
const upload = multer();

app.use(upload.array());

//memanggil route pada routes\api.route.js
require("./routes/api.route")(app, urlApi);

//listen
app.listen(port, () => {
  console.log(
    `server is running on port ${port} and url ${baseConfig.base_url}`
  );
});
