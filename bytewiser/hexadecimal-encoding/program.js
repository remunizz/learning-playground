// Store the program arguments
var argvs = process.argv.slice(2);

// Create the final string
var hexLabel = '';

// Instantiate the buffer
var buffer;

// Run a loop of all arguments
argvs.forEach((argv) => {
	// Creare a new buffer with an argument hex value
	buffer = new Buffer(Number(argv).toString(16));
	// Convert the buffer to string
	hexLabel += buffer.toString();
}); 

// Print the result
console.log(hexLabel);
