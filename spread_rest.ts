// const add1 = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }
// printOutput(add1(5));

const hobbies: string[] = ['Sports', 'Cooking'];
const activeHobbies: string[] = ['Hiking'];

// activeHobbies.push(...hobbies);

const person1 = {
  firstName: 'Max',
  age: 30
};

const copiedPerson = {...person1};

const add2 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add2(5, 10, 2, 5.7, 10, 60, 80, 12, 13)
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age} = person1;
console.log(userName, age, person1);
