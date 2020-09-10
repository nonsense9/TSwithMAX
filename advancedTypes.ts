type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Alex',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// <= FUNCTION OVERLOADS => //
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString;
  }
  return a + b;
}

const result = add('s', 1);
result.split(' ');
// <= FUNCTION OVERLOADS => //

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData.job.title);
// <= NULLISH COALESCING => //
const userInput = null;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
// <= NULLISH COALESCING => //

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }

// printEmployeeInformation({name: 'Manu', startDate: new Date()});

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading a cargo' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//   vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse'
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;
// let speed;
// function moveAnimal(animal: Animal) {
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//       case 'horse':
//         speed = animal.runningSpeed;
//   }
//   console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // let userInputElement = <HTMLInputElement>document.getElementById('user-input')!; <= those examples are actually the same(both work)
// let userInputElement = document.getElementById('user-input')! as HTMLInputElement; // <= those examples are actually the same(both work)

// userInputElement.value = 'Hi there!';


// interface ErrorContainer {
//   id: string;
//   [prop: string]: string; // <= Here we are saying that we dont know what will be the property name, but we know the type of it
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character'
// };