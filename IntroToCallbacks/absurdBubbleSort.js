const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, function(answer) {
    if (answer === 'yes') {
      // console.log(`yes, ${el1} is greater than ${el2}`);
      callback(true);
    } else {
      // console.log(`no, ${el1} is less than ${el2}`);
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if(i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(arg) {
      //takes the single argument isGreaterThan 
      if (arg === true){
        const temp = arr[i];
        arr[i] = arr[i + 1]; 
        arr[i + 1] = temp;
        madeAnySwaps = true;
        // innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
      console.log(`Your ${arr} looks like - I'm in the inner loop`);
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else if (i === arr.length - 1){
    console.log(`I'm done! ${arr}`);
    outerBubbleSortLoop(madeAnySwaps);
  }
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      madeAnySwaps = false; 
      let i = 0;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

//test 1 
// askIfGreaterThan(4, 2, (el) => console.log(`You have chosen ${el}`));
//test 2 
// innerBubbleSortLoop([1,3,2], 0, false);

// innerBubbleSortLoop([1,4,5,2,3], 0, false, (el) => (console.log(`done!`)));

// //test 3
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});