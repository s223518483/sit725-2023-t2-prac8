let { MongoClient, ServerApiVersion } = require("mongodb-legacy");
const uri =
	"mongodb+srv://sit725admin:sit725admin@cluster0.x84y69q.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

client.connect();

module.exports = client;
