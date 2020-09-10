// const names: Array<string> = ['Max', 'Manuel'];
// names[0].split(' ');
// <= In example above we used generic type where we mentioned that we expect an array of strings, so now we can use string methods on them
// const promise: Promise<string> = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000)
// });

// promise.then(data => {
//   data.split(' ');
// })

function merge<T extends object, V extends object, U>(objA: T, objB: V, ojbC: U) {
  return Object.assign(objA, objB, ojbC);
}

const mergedObj = merge({name: 'Alex'}, {age: 27}, {value: '30'});
console.log(mergedObj.age);
console.log(merge({name: 'Alex'}, {age: 27}, {value: '30'}));

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.'
  if (element.length === 1) {
    descriptionText = 'Got 1 element'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndPrint('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Alex'}, 'name');
console.log(extractAndConvert({name: 'Alex'}, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) { // <= if this will have a value of -1 it means that there isn't this item to remove
      return;
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Alex');
textStorage.addItem('Ira');
textStorage.removeItem('Alex');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Alex'})
// objStorage.addItem({name: 'Irina'});
// // ....
// objStorage.removeItem({name: 'Irina'});
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal (
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Alex','Irina'] // <= Here we say that we dont allow any modification of this array
// names.push('Oleg'); // <= so those methods dont work now because of Readonly
// names.pop();