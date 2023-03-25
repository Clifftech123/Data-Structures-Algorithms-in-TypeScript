

// THIS IS AN EXAMPLE OF A LINEAR TIME COMPLEXITY ALGORITHM 
// THE TIME IT TAKES TO RUN THE FUNCTION IS DIRECTLY PROPORTIONAL TO THE SIZE OF THE INPUT

// crating an array with one element

const namo :string[] = ["namo"];

/// crating every element of the array`
const everyone :string[] = ["namo", "dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];


// crating an array of 100 elements that are all "namo" uaing the fill method
const big :string[] = new Array(100).fill("namo");

// function that loops through the array and prints "namo is here" if it finds "namo"
function findNemo(array: string[]) :void {


  for (let i = 0; i< array.length ; i++) {
   if (array[i] === "namo") {
    console.log("namo is here");
   }
  }

 

}

// calling the function
findNemo( big );


// Big O Notation
// O(n) --> Linear Time when the input is increased by 1 the time it takes to run the function increases by 1 as well. 