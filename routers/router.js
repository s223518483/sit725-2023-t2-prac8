let express = require("express");
let router = express.Router();
let controller = require("../controllers/controller");

router.post("/", (req, res) => {
	controller.postKitchen(req, res);
});

router.get("/", (req, res) => {
	controller.getAllKitchens(req, res);
});

module.exports = router;
