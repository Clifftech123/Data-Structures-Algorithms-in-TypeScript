function anotherFunction(){
    // unimportant  runtime 

}


//  function to take an array as input and return a number
function funCahllange (input:Array<any>): number{
    let a = 10; // O(1) //  
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++){ // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
        
    }
    return a; // O(1)
    
}


//  this array has 10 elements
const numbersArray = [1,2,3,4,5,6,7,8,9,10];

//  calling the function

funCahllange(numbersArray); //  Big O Notation --> O(3 + 4n) --> O(n)
