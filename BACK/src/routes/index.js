const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharById = require("../controllers/getCharDetail");
const getCharDetail = require("../controllers/getCharDetail");

const router = Router();

router.get("onsearch/:id", getCharById);

router.get("detail/:id", getCharDetail);

router.use("/rickandmorty/favs")

module.exports = router;