// Listen to stdin event
process.stdin.on('readable', ()=> {

  // Read the stdin and store the result in buffer var
  var buffer = process.stdin.read();

  // Check if buffer is null
  if (buffer !== null) {

    // Create loop vars
	var i = 0;
	var max = buffer.length;

	// Loop the buffer
	for (i; i < max; i++) {

      // Check if the buffer is "."
	  if (buffer[i] === 46) {
        
        // Change the buffer item to "!"
        buffer[i] = 33;
	  }
	}

	// Print the buffer
    console.log(buffer);

    // End the stdin
	process.stdin.end();
  }
});

