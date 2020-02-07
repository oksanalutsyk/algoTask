import Task from "./constructor.js";
import { tasks } from "./constructor.js"; 

tasks.set(
  "555",
  new Task(
    "Pascal's triangle is a numerical triangle in which there are '1' on the edges, and each number inside is equal to the sum of the two standing above it in the next row from above.Given a natural number n. Get the first n lines of a Pascal's triangle.",
    params => pascalTriangle(...params)
  )
);


tasks.set(
  "178",
  new Task(
    "Given natural number n, a1, ... ,an. Find the number (ak) of sequence members a1, ... ,an that satisfy the given conditions: ak<(ak-1 + ak+1)/2. Please write two numbers (a1 and an)",
    params => conditionH(...params)
  )
);
tasks.set(
  "179",
  new Task(
    "Given natural number n, a1, ... ,an. Find the number (ak) of sequence members a1, ... ,an that satisfy the given conditions: 2**k<ak<k!. Please write two numbers (a1 and an)",
    params => conditionD(...params)
  )
);
//----------------------------------555------------------------------------------------//
function pascalTriangle(numRows) {
  function generate(numRows) {
    let triangle = [[1], [1, 1]];

    if (numRows === 0) {
      return [];
    } else if (numRows == 1) {
      return [[1]];
    } else if (numRows == 2) {
      return [[1], [1, 1]];
    } else {
      for (let i = 2; i < numRows; i++) {
        addRow(triangle);
      }
    }
    return triangle;
  }
  function addRow(triangle) {
    let previous = triangle[triangle.length - 1];
    let newRow = [1];
    for (let i = 0; i < previous.length - 1; i++) {
      let current = previous[i];
      let next = previous[i + 1];
      newRow.push(current + next);
    }
    newRow.push(1);
    return triangle.push(newRow);
  }
  console.log(generate(numRows));
}

//----------------------------------178h------------------------------------------------//

function conditionH(firstNumber,secondNumber) {
  let arr = [];
  if (firstNumber <= 0) {
    console.log("Please write first number > 0");
  } else {
    for (let i = parseFloat(firstNumber); i <= secondNumber; i++) {
      arr.push(i);
    }

    arr.forEach(function callback(currentValue, index, array) {
      console.log(currentValue, index, array);
      if (currentValue < currentValue - 1 + currentValue + 1 / 2) {
        console.log(false);
      } else {
        console.log(true);
        count++;
      }
    });
    console.log(count);
  }
}
//----------------------------------178d------------------------------------------------//

function conditionD(firstNumber,secondNumber) {
  let arr = [];
  for (let i = parseFloat(firstNumber); i <= secondNumber; i++) {
    arr.push(i);
  }
  arr.forEach(function callback(currentValue, index, array) {
    if (
      2 ** (index + 1) < currentValue &&
      currentValue < factorial(index + 1)
    ) {
      console.log(true);
      count++;
    } else {
      console.log(false);
    }
  });

  console.log(count);

  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
}
