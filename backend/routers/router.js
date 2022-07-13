const express = require("express");
const route = express.Router();
const db_controller = require("../controllers/DB_Controller");

route.get("/", db_controller.getAllPhotos);
route.get("/:id", db_controller.getOnePhoto);
route.post("/", db_controller.createPhoto);
route.delete("/:id", db_controller.deletePhoto);

module.exports = route;
