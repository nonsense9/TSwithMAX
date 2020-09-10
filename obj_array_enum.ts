enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'is an author'};

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role.push('admin');
// person.role[1] = 10; // <= wont work
// person.role = [0, 'admin', 'user'] // <= wont work

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  
}