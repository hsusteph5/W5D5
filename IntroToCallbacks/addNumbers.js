const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0){
    reader.question("Pick a number", function(answer) {
      const number = parseInt(answer);
      sum += number; 
      console.log(`This is the new sum: ${sum}`);
      numsLeft -= 1;
      return addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    return completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));