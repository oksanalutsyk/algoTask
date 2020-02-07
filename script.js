// start()
// function start(){
let exercises = [1, 2, 3];
let a = prompt(`Please choose exersice:${exercises}`);
let b = Number(a);
console.log(a);
let count = 0;
// }

class Exercise {
  constructor(name, description, exercise) {
    (this.name = name),
      (this.description = description),
      (this.exercise = exercise);
  }
}

const exercise1 = new Exercise(
  "Exercise name",
  "Exercise description",
  function() {
    console.log("hello");
  }
);

console.log(exercise1.exercise);

class MethodFactory {
  constructor() {
    this.classType = "";
  }
  //Задача №1
  taskOne() {
    let numRows = prompt("Write number");

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
  //Задача #2
  taskTwo() {
    let firstNumber = prompt("Введіть а1 елемент");
    let secondNumber = prompt("Введіть аn елемент");
    let arr = [];

    for (let i = parseFloat(firstNumber); i <= secondNumber; i++) {
      arr.push(i);
    }
    arr.forEach(function callback(currentValue, index, array) {
      console.log(currentValue, index, array);

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

  //Задача #3
  taskThree() {
    let firstNumber = prompt("Введіть а1 елемент");
    let secondNumber = prompt("Введіть аn елемент");
    let arr = [];
    if (firstNumber <= 0) {
      console.log("Please write first number > 0");
    } else {
      for (let i = parseFloat(firstNumber); i <= secondNumber; i++) {
        arr.push(i);
        //   console.log(i);
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

  createMethods(b) {
    switch (b) {
      case 1:
        console.log("1");
        this.taskOne();
        break;
      case 2:
        console.log("2");
        this.taskTwo();
        break;
      case 3:
        console.log("3");
        this.taskThree();
        break;
    }
  }
}
const getMethods = new MethodFactory();
const res = getMethods.createMethods(b);



