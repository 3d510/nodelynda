var fs = require("fs");
// fs.renameSync("./assets/logs", "./logs");

// fs.rmdir("./assets", function(err) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log("Assets Dir removed");
// });

fs.readdirSync("./logs").forEach(function(fileName) {
	fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs", function(err) {
	if (err) {
		throw err;
	}
	console.log("logs dir removed");
})