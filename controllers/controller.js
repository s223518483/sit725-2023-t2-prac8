let collection = require("../models/kitchen");

const postKitchen = (req, res) => {
	let kitchen = req.body;
	collection.postKitchen(kitchen, (err, result) => {
		if (!err) {
			res.json({ statuscode: 201, data: result, message: "success" });
		}
	});
};

const getAllKitchens = (req, res) => {
	collection.getAllKitchens((err, result) => {
		if (!err) {
			res.json({
				statusCode: 200,
				data: result,
				message: "get all kitchen success",
			});
		}
	});
};

module.exports = { getAllKitchens, postKitchen };
