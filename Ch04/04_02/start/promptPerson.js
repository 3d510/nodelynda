var readline = require('readline');
var realPerson = {
	name: "",
	sayings: []
}

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("what is the real name", function(answer) {
	realPerson.name = answer;
	rl.setPrompt(`What would ${realPerson.name} say?`);
	rl.prompt();
	rl.on('line', function(saying) {
		realPerson.sayings.push(saying.trim());
		if (saying.toLowerCase().trim() === 'exit'){
			rl.close();
		} else {
			rl.setPrompt(`What else?`);
			rl.prompt();
		}
	});
});

rl.on('close', function() {
	console.log("%s says %", realPerson.name, realPerson.sayings);
	process.exit();
});