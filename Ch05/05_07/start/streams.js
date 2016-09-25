var fs = require("fs");

// fs.readFile("./chat.log", "UTF-8", function(err, chatlog) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(`File read ${chatlog.length}`)	
// })

// console.log("reading file");

var stream = fs.createReadStream("./chat.log", "UTF-8");
var data = "";

stream.once('data', function() {
	console.log("\n\n\n");
	console.log("Start reading file");
	console.log("\n\n");
});

stream.on('data', function(chunk) {
	process.stdout.write(` chunk: ${chunk.length} |`);
	data += chunk;
});

stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`finished reading file ${data.length}`);
	console.log("\n\n\n");
});
