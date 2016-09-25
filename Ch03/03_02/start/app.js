function grab(flag) {
	var index = process.argv.indexOf(flag);
	if (index == -1)  
		return null;
	return process.argv[index + 1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
	console.log("No");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}
