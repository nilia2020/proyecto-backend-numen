const express = require("express");
const router = express.Router();
const { seeDriversBySeason } = require("../controllers/apicontroller");

router.get("/drivers/:season", seeDriversBySeason);

module.exports = router;
