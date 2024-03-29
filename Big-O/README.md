## BIG NOTATION (Big-O)

Big-O notation is a way to describe the performance or complexity of an algorithm. It describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk).

- Big-O  describes how  the algorithm's runtime will grow relative to the input as the input gets arbitrarily large.

- Note :Just remember at this point when we talk about Big O and scalability of code we simply mean when we grow bigger and bigger with our input How much does the algorithm slow down the less it slows down or e slower it slows down the better it is.




# Algorithm Time-Complexity Analysis

**Goal:** Understand how the runtime of an algorithm is affected by an increasing number of elements.

## 5 Rules
1. Analyze the worst case performance of the algorithm, i.e. Big O
2. Add steps in order (+); multiply nested steps (*)
3. Different inputs should have different variables, e.g. O(a+b)
4. Remove constants
5. Drop non-dominants

## 3 Types
### 1. Big O – Worst Case



#### Ideal

* O(n) – Linear  
The Linear time complexity is the most common time complexity. It means that the time it takes to run an algorithm is directly proportional to the size of the input data set. It is the best case scenario for an algorithm.  

```ts

function linearSearch(items: any[], value: any): number {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === value) {
      return i;
    }
  }
  return -1;
}


 // in this example the time it takes to run the algorithm is directly proportional to the size of the input data set.   



```

* O(1) – Constant 

This constant is the number of steps it takes to complete the algorithm. It does not matter how big the input is, the algorithm will always take the same amount of time to complete. it  alway  takes first  item in the array and return it.  

```ts
function getFirstItem(items: any[]): any {
  return items[0];
  
}

// This example is constant because it does not matter how big the input is, the algorithm will always take the same amount of time to complete. it  alway  takes first  item in the array and return it.

```



O(log n) – Logarithmic 



#### Acceptable
O(n * log n) – Log Linear  

#### Avoid
O(n^2) – Quadratic  
O(2^n) – Exponential  
O(n!) – Factorial  

### 2. Big Θ – Average/Tight Case
### 3. Big Ω – Best Case

## Resources

- [Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell](https://www.bigocheatsheet.com/ "Big O Cheat Sheet")
- [Practical Java Examples of the Big O Notation](https://www.baeldung.com/java-algorithm-complexity "Big O Examples")
